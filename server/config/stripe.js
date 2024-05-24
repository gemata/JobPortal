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

router.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];

  if (req.body.type === "invoice.payment_succeeded") {
    const invoice = req.body.data.object;

    const subscriptionPlan = invoice.lines.data[0].price.product;
    const amountPaid = invoice.amount_paid / 100;

    console.log(subscriptionPlan);

    try {
      await InvoiceM.create({
        subscriptionPlan: subscriptionPlan,
        amountPaid: amountPaid,
        isActive: true,
        paymentDate: new Date(invoice.created * 1000),
      });
    } catch (err) {
      console.error("Error saving invoice:", err);
      return res.status(500).send("Error saving invoice");
    }
  }

  res.status(200).send("Received event");
});

export default router;
