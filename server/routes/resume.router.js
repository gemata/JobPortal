import express from 'express';
import ResumeController from '../controllers/resume.controller.js';

const ResumeRouter = express.Router();

ResumeRouter.post('/', ResumeController.createLikedJobs);

ResumeRouter.get('/', ResumeController.getLikedJobss);

ResumeRouter.get('/:id', ResumeController.getLikedJobsById);

ResumeRouter.put('/:id', ResumeController.updateLikedJobs);

ResumeRouter.delete('/:id', ResumeController.deleteLikedJobs);

export default ResumeRouter;