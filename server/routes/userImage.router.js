import express from 'express';
import UserImageController from '../controllers/userImage.controller.js';

const UserImageRouter = express.Router();

UserImageRouter.post('/', UserImageController.createUserImage);

UserImageRouter.get('/', UserImageController.getUserImages);

UserImageRouter.get('/:id', UserImageController.getUserImageById);

UserImageRouter.put('/:id', UserImageController.updateUserImage);

UserImageRouter.delete('/:id', UserImageController.deleteUserImage);

export default UserImageRouter;