import express from 'express';
import CompanyController from '../controllers/company.controller.js';

const CompanyRouter = express.Router();

CompanyRouter.post('/', CompanyController.createCompany);

CompanyRouter.get('/', CompanyController.getCompanies);

CompanyRouter.get('/:id', CompanyController.getCompanyById);



CompanyRouter.put('/:id', CompanyController.updateCompany);

CompanyRouter.delete('/:id', CompanyController.deleteCompany);

export default CompanyRouter;