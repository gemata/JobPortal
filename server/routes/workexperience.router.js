import express from 'express';
import WorkExperienceController from '../controllers/workexperience.controller.js';

const WorkExperienceRouter = express.Router();

WorkExperienceRouter.post('/', WorkExperienceController.createWorkExperience);

WorkExperienceRouter.get('/', WorkExperienceController.getWorkExperiences);

WorkExperienceRouter.get('/:id', WorkExperienceController.getWorkExperienceById);

WorkExperienceRouter.put('/:id', WorkExperienceController.updateWorkExperience);

WorkExperienceRouter.delete('/:id', WorkExperienceController.deleteWorkExperience);

export default WorkExperienceRouter;
