import express from 'express';
import CompanyLogoController from '../controllers/companylogo.controller.js';

const CompanyLogoRouter = express.Router();

CompanyLogoRouter.post('/', CompanyLogoController.createCompanyLogo);

CompanyLogoRouter.get('/', CompanyLogoController.getCompanyLogos);

CompanyLogoRouter.get('/:id', CompanyLogoController.getCompanyLogoById);

CompanyLogoRouter.put('/:id', CompanyLogoController.updateCompanyLogo);

CompanyLogoRouter.delete('/:id', CompanyLogoController.deleteCompanyLogo);

export default CompanyLogoRouter;