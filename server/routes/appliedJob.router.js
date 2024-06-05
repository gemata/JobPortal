import express from 'express';
import AppliedJobController from '../controllers/appliedJob.controller.js';

const AppliedJobsRouter = express.Router();

AppliedJobsRouter.post('/', AppliedJobController.createAppliedJob);

AppliedJobsRouter.get('/', AppliedJobController.getAppliedJobs);

AppliedJobsRouter.get('/:id', AppliedJobController.getAppliedJobById);

AppliedJobsRouter.put('/:id', AppliedJobController.updateAppliedJob);

AppliedJobsRouter.put('/user/:id', AppliedJobController.updateAppliedJobbyUserId);

AppliedJobsRouter.get('/user/:UserId', AppliedJobController.getAppliedJobsByUserId);

AppliedJobsRouter.delete('/:id', AppliedJobController.deleteAppliedJob);

export default AppliedJobsRouter;