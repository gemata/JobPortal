import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/', UserController.createUser);

userRouter.get('/', UserController.getUsers);

userRouter.post('/forgot-password', UserController.forgotPassword);

userRouter.get('/:id', UserController.getUserById);

userRouter.put('/:id', UserController.updateUser);

userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;
