// Import the User model and Sequelize
import User from '../models/user.entity.js';
import PendingAccount from '../models/pendingAccount.js';
import UserProfile from '../models/userProfile.entity.js';
import UserImage from '../models/userImage.entity.js';
import Resume from '../models/resume.entity.js';
import { Op } from 'sequelize';
import argon2 from 'argon2';

// Controller functions
const UserController = {

  // Create a new user
  async createUser(req, res) {
    const { body } = req;
    try {

      const existingUser = await User.findOne({ where: { email: body.email.toLowerCase() } });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      body.password = await argon2.hash(body.password);

      const newUser = await User.create(body);

      await PendingAccount.deleteOne({ 'email': body.email.toLowerCase() });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.findAndCountAll(); // This will return { count, rows }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a user by ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const UserRecord = await User.findByPk(id, {
        include: [
          { model: UserProfile, as: 'UserProfile' },
          { model: UserImage, as: 'UserImage' },
          { model: Resume, as: 'Resume' }
        ]
      });
      if (!UserRecord) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(UserRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a user
  async updateUser(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {

      if (body.password) {
        body.password = await argon2.hash(body.password);
      }

      const [updatedRowsCount, updatedUser] = await User.update(body, {
        where: { id },
        returning: true, // Return the updated user object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an user
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await User.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Send an email
  async forgotPassword(req, res) {
    const { body } = req;
    const email = body.email;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const resetToken = await argon2.hash(user.email);

    const resetTokenExpire = Date.now() + 3600000;

    await User.update({ resetToken: resetToken, resetTokenExpire }, { where: { email } });

    const resetLink = `http://localhost:3000/reset-password?token=${encodeURIComponent(resetToken)}`;

    res.mailer.send('forgotPassword', {
      to: email,
      subject: 'Reset Password',
      email: email,
      resetLink: resetLink
    }, function (err, message) {
      if (err) {
        console.log(err);
        return res.status(500).send('There was an error sending the email');
      }
      res.header('Content-Type', 'text/plain');
      res.send('Password reset email sent.');
    });
  },

  async changePassword(req, res) {
    const { body } = req;
    const token = body.token;
    let password = body.password;
    try {
      const user = await User.findOne({ where: { resetToken: token } });

      if (!user) {
        return res.status(404).json({ error: 'Token is not valid. Please request a new password reset.' });
      }
      const tokenExpiration = user.resetTokenExpire;
      const now = new Date();
      if (!tokenExpiration || tokenExpiration < now) {
        return res.status(400).json({ error: 'Token has expired. Please request a new password reset.' });
      }

      password = await argon2.hash(password);

      await User.update({ password, resetToken: null, resetTokenExpire: null }, { where: { resetToken: token } });

      res.header('Content-Type', 'text/plain');
      res.send('Password has been reset.');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};

export default UserController;
