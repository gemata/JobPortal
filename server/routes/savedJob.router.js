import express from 'express';
import SavedJobController from '../controllers/savedJob.controller.js';

const SavedJobsRouter = express.Router();

SavedJobsRouter.post('/', SavedJobController.createSavedJob);

SavedJobsRouter.get('/', SavedJobController.getSavedJobs);

SavedJobsRouter.get('/:id', SavedJobController.getSavedJobById);

SavedJobsRouter.get('/user/:UserId', SavedJobController.getSavedJobsByUserId);

SavedJobsRouter.put('/:id', SavedJobController.updateSavedJob);

SavedJobsRouter.delete('/:id', SavedJobController.deleteSavedJob);

export default SavedJobsRouter;