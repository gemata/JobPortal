import express from 'express';
import AppliedJobsController from '../controllers/appliedJobs.controller.js';

const AppliedJobsRouter = express.Router();

AppliedJobsRouter.post('/', AppliedJobsController.createAppliedJobs);

AppliedJobsRouter.get('/', AppliedJobsController.getAppliedJobss);

AppliedJobsRouter.get('/:id', AppliedJobsController.getAppliedJobsById);

AppliedJobsRouter.put('/:id', AppliedJobsController.updateAppliedJobs);

AppliedJobsRouter.delete('/:id', AppliedJobsController.deleteAppliedJobs);

export default AppliedJobsRouter;