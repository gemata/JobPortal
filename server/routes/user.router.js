import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

// POST /api/users - Create a new user
userRouter.post('/', UserController.createUser);

// GET /api/users - Get all users
userRouter.get('/', UserController.getUsers);

// GET /api/users/:id - Get a user by ID
userRouter.get('/:id', UserController.getUserById);

// PUT /api/users/:id - Update a user by ID
userRouter.put('/:id', UserController.updateUser);

// DELETE /api/users/:id - Delete a user by ID
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;
