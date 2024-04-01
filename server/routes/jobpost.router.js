import express from 'express';
import JobPostController from '../controllers/JobPost.controller.js';

const JobPostRouter = express.Router();

JobPostRouter.post('/', JobPostController.createJobPost);

JobPostRouter.get('/', JobPostController.getJobPosts);

JobPostRouter.get('/:id', JobPostController.getJobPostById);

JobPostRouter.put('/:id', JobPostController.updateJobPost);

JobPostRouter.delete('/:id', JobPostController.deleteJobPost);

export default JobPostRouter;