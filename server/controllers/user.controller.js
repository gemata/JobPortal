// Import the User model and Sequelize
import User from '../models/user.entity.js';
import { Op } from 'sequelize';
import argon2 from 'argon2';

// Controller functions
const UserController = {
  // Create a new user
  async createUser(req, res) {
    const { body } = req;
    try {

      body.password = await argon2.hash(body.password);

      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a user by ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a user
  async updateUser(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {

      body.password = await argon2.hash(body.password);

      const [updatedRowsCount, updatedUser] = await User.update(body, {
        where: { id },
        returning: true, // Return the updated user object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(updatedUser[0]);
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
      return res.status(404).json({ message: 'User not found' });
    }

    res.mailer.send('email', {
      to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
      subject: 'Reset Password', // REQUIRED.
      email: email // Pass the email as data
    }, function (err, message) {
      if (err) {
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.header('Content-Type', 'text/plain');
      res.send(message);
    });
  }
};

export default UserController;
