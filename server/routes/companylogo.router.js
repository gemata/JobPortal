import express from 'express';
import CompanyLogoController from '../controllers/companylogo.controller.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `public/companyLogos/${req.body.id}`;

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const CompanyLogoRouter = express.Router();

CompanyLogoRouter.post('/', express.urlencoded({ extended: true }), upload.single('file'), CompanyLogoController.createCompanyLogo);

CompanyLogoRouter.get('/', CompanyLogoController.getCompanyLogos);

CompanyLogoRouter.get('/:id', CompanyLogoController.getCompanyLogoById);

CompanyLogoRouter.put('/:id', express.urlencoded({ extended: true }), upload.single('file'), CompanyLogoController.updateCompanyLogo);

CompanyLogoRouter.delete('/:id', CompanyLogoController.deleteCompanyLogo);

export default CompanyLogoRouter;