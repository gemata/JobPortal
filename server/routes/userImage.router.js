import express from 'express';
import UserImageController from '../controllers/userImage.controller.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `public/profilePics/${req.body.id}`;

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

const UserImageRouter = express.Router();

UserImageRouter.post('/', express.urlencoded({ extended: true }), upload.single('file'), UserImageController.createUserImage);

UserImageRouter.get('/', UserImageController.getUserImages);

UserImageRouter.get('/:id', UserImageController.getUserImageById);

UserImageRouter.put('/:id', express.urlencoded({ extended: true }), upload.single('file'), UserImageController.updateUserImage);

UserImageRouter.delete('/:id', UserImageController.deleteUserImage);

export default UserImageRouter;
