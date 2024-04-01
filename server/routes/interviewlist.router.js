import express from 'express';
import InterviewListController from '../controllers/InterviewList.controller.js';

const InterviewListRouter = express.Router();

InterviewListRouter.post('/', InterviewListController.createInterviewList);

InterviewListRouter.get('/', InterviewListController.getInterviewLists);

InterviewListRouter.get('/:id', InterviewListController.getInterviewListById);

InterviewListRouter.put('/:id', InterviewListController.updateInterviewList);

InterviewListRouter.delete('/:id', InterviewListController.deleteInterviewList);

export default InterviewListRouter;