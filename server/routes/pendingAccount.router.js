import express from 'express';
import PendingAccountController from '../controllers/pendingAccount.controller.js';

const PendingAccountRouter = express.Router();

PendingAccountRouter.post('/', PendingAccountController.createPendingAccount);

PendingAccountRouter.post('/check', PendingAccountController.checkPendingAccount);

export default PendingAccountRouter;
