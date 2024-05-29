import express from 'express';
import ApplicantListController from '../controllers/applicantlist.controller.js';

const ApplicantListRouter = express.Router();

ApplicantListRouter.post('/', ApplicantListController.createApplicantList);

ApplicantListRouter.get('/', ApplicantListController.getApplicantLists);

ApplicantListRouter.get('/:id', ApplicantListController.getApplicantListById);

ApplicantListRouter.get('/job/:JobPostID', ApplicantListController.getApplicantListByJobPostID);

ApplicantListRouter.get('/getselected/:JobPostID', ApplicantListController.getSelectedApplicants);


ApplicantListRouter.put('/:id', ApplicantListController.updateApplicantList);

ApplicantListRouter.delete('/:id', ApplicantListController.deleteApplicantList);

export default ApplicantListRouter;
