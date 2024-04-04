import express from 'express';
import ResumeController from '../controllers/resume.controller.js';

const ResumeRouter = express.Router();

ResumeRouter.post('/', ResumeController.createResume);

ResumeRouter.get('/', ResumeController.getResumes);

ResumeRouter.get('/:id', ResumeController.getResumeById);

ResumeRouter.put('/:id', ResumeController.updateResume);

ResumeRouter.delete('/:id', ResumeController.deleteResume);

export default ResumeRouter;