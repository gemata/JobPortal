import express from 'express';
import UserProfileController from '../controllers/userProfile.controller.js';

const UserProfileRouter = express.Router();

UserProfileRouter.post('/', UserProfileController.createUserProfile);

UserProfileRouter.get('/', UserProfileController.getUserProfiles);

UserProfileRouter.get('/:id', UserProfileController.getUserProfileById);

UserProfileRouter.get('/user/:UserId', UserProfileController.getUserProfileByUserId);

UserProfileRouter.put('/:id', UserProfileController.updateUserProfile);

UserProfileRouter.delete('/:id', UserProfileController.deleteUserProfile);

export default UserProfileRouter;