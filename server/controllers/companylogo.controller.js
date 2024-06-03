// Import the CompanyLogo model and Sequelize
import CompanyLogo from "../models/CompanyLogo.entity.js";
import fs from "fs";
import path from "path";

// Controller functions
const CompanyLogoController = {
  // Create a new CompanyLogo
  async createCompanyLogo(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const companyLogo = await CompanyLogo.create({
        CompanyID: req.body.id,
        s3Key: `${req.body.id}/${req.file.filename}`,
        bucket: 'public/companyLogos',
        mime: req.file.mimetype,
      });

      return res.status(201).json({ message: 'File uploaded successfully', companyLogo });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all CompanyLogos
  async getCompanyLogos(req, res) {
    try {
      const CompanyLogos = await CompanyLogo.findAll();
      return res.status(200).json(CompanyLogos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a CompanyLogo by ID
  async getCompanyLogoById(req, res) {
    const { id } = req.params;
    try {
      const CompanyLogoRecord = await CompanyLogo.findOne({ where: { CompanyID: id } });
      if (!CompanyLogoRecord) {
        return res.status(404).json({ message: "CompanyLogo not found" });
      }
      return res.status(200).json(CompanyLogoRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a CompanyLogo
  async updateCompanyLogo(req, res) {
    const { id } = req.params;
    const { body } = req;

    try {
      let companyLogo = await CompanyLogo.findOne({
        where: { CompanyID: body.id },
      });

      if (companyLogo) {
        const filePath = `${companyLogo.bucket}/${companyLogo.s3Key}`;

        try {
          if (fs.existsSync(filePath)) {
            await fs.promises.unlink(filePath);
            console.log(`File unlinked: ${filePath}`);
          } else {
            console.log(`File not found: ${filePath}`);
          }
        } catch (error) {
          console.error(`Error unlinking file: ${filePath}`, error);
          throw error;
        }

        companyLogo.set({
          s3Key: `${body.id}/${req.file.filename}`,
          bucket: 'public/companyLogos',
          mime: req.file.mimetype,
          CompanyID: body.id,
        });
        await companyLogo.save();
      }
      return res.status(200).json({ message: 'Company logo updated successfully', companyLogo });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete an CompanyLogo
  async deleteCompanyLogo(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await CompanyLogo.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "CompanyLogo not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


};

export default CompanyLogoController;
