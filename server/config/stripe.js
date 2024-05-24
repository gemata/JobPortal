import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import InvoiceM from "../models/invoiceMSchema.js";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();
const webhookSecret = process.env.ENDPOINT_SECRET;

router.post("/create-checkout-session", async (req, res) => {
  const { planId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: planId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.log(`Webhook signature verification failed: ${err.message}`);
      return res.sendStatus(400);
    }

    if (event.type === "invoice.payment_succeeded") {
      const invoice = event.data.object;

      const subscriptionPlan = invoice.lines.data[0].price.product;
      const amountPaid = invoice.amount_paid / 100;

      const newInvoice = new InvoiceM({
        subscriptionPlan,
        amountPaid,
        isActive: true,
        paymentDate: new Date(invoice.created * 1000),
      });

      try {
        await newInvoice.save();
        console.log("Invoice saved:", newInvoice);
      } catch (err) {
        console.log("Error saving invoice:", err);
      }
    }

    res.status(200).send("Received event");
  }
);

export default router;
