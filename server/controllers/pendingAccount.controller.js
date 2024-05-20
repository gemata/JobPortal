import User from '../models/user.entity.js';
import Company from '../models/Company.entity.js';
import PendingAccount from '../models/pendingAccount.js';
import argon2 from 'argon2';

// Controller functions
const PendingAccountController = {

  async createPendingAccount(req, res) {
    const { body } = req;
    try {
      const existingUser = await User.findOne({ where: { email: body.email.toLowerCase() } });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      const existingCompany = await Company.findOne({ where: { email: body.email.toLowerCase() } });
      if (existingCompany) {
        return res.status(400).json({ error: 'Company with this email already exists' });
      }

      const existingPendingAccount = await PendingAccount.findOne({ 'email': body.email.toLowerCase() });
      if (existingPendingAccount) {
        await PendingAccount.deleteMany({ 'email': body.email.toLowerCase() });
      }

      body.password = await argon2.hash(body.password);

      const confirmToken = await argon2.hash(body.email);

      const confirmTokenExpire = Date.now() + 3600000;

      const newAccount = await PendingAccount.create({
        email: body.email,
        password: body.password,
        confirmToken: confirmToken,
        confirmTokenExpire: confirmTokenExpire
      });

      const confirmLink = `http://localhost:3000/confirm-account?token=${encodeURIComponent(confirmToken)}`;

      res.mailer.send('confirmAccount', {
        to: body.email,
        subject: 'Confirm your account',
        email: body.email,
        confirmLink: confirmLink
      }, function (err, message) {
        if (err) {
          console.log(err);
          return res.status(500).send('There was an error sending the email');
        }
        res.header('Content-Type', 'text/plain');
        res.send('Confirmation email sent.');
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async checkPendingAccount(req, res) {
    const { body } = req;
    try {
      const existingPendingAccount = await PendingAccount.findOne({ 'confirmToken': body.token });
      if (!existingPendingAccount || existingPendingAccount.email.toLowerCase() !== body.email.toLowerCase()) {
        return res.status(400).json({ error: 'Credentials do not match' });
      }

      const passwordMatch = await argon2.verify(existingPendingAccount.password, body.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Credentials do not match' });
      }

      res.header('Content-Type', 'text/plain');
      res.send('Credentials match');

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default PendingAccountController;
