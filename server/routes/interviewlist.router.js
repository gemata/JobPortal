import express from 'express';
import InterviewListController from '../controllers/InterviewList.controller.js';

const InterviewListRouter = express.Router();

InterviewListRouter.post('/', InterviewListController.createInterviewList);

InterviewListRouter.post('/fromselectedapplicants/:id', InterviewListController.createInterviewsFromSelectedApplicants);

InterviewListRouter.get('/', InterviewListController.getInterviewLists);

InterviewListRouter.get('/:id', InterviewListController.getInterviewListById);

InterviewListRouter.get('/user/:UserId', InterviewListController.getInterviewListsByUserId);

InterviewListRouter.get('/jobs/:JobPostID', InterviewListController.getInterviewListByJobPostID);

InterviewListRouter.put('/:id', InterviewListController.updateInterviewList);

InterviewListRouter.put('/user-notes/:id', InterviewListController.updateInterviewListUserNotes);

InterviewListRouter.delete('/:id', InterviewListController.deleteInterviewList);

export default InterviewListRouter;