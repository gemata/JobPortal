import express from 'express';
import LikedJobsController from '../controllers/likedJobs.controller.js';

const LikedJobsRouter = express.Router();

LikedJobsRouter.post('/', LikedJobsController.createLikedJobs);

LikedJobsRouter.get('/', LikedJobsController.getLikedJobss);

LikedJobsRouter.get('/:id', LikedJobsController.getLikedJobsById);

LikedJobsRouter.put('/:id', LikedJobsController.updateLikedJobs);

LikedJobsRouter.delete('/:id', LikedJobsController.deleteLikedJobs);

export default LikedJobsRouter;