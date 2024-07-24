import { Router, Request, Response } from 'express';
import multer from 'multer';
import { PostFile } from '../services/files';
import * as path from 'path';
import fs from 'fs';
import cloudinary from '../services/cloudinary';
import { uploadBook } from '../controllers/item.controller';

const fileRouter = Router();
const uploadFolder = path.join(__dirname, '..', 'uploads');

// Check if the uploads folder exists, if not, create it
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
  destination: function(req: any, file: any, cb: any) {
    cb(null, uploadFolder);
  },
  filename: function(req: any, file: any, cb: any) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

fileRouter.post('/upload', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), async (req: any, res: any) => {
  const { itemTitle, itemType, firstName, lastName, note, price, email, category } = req.body;

  const itemPrice = Number(price);
  if (isNaN(itemPrice)) {
    return res.status(400).json({ error: `${price} invalid price type. Requires number` });
  }

  if (!req.files || !req.files.file || !req.files.coverImage) {
    return res.status(400).json({ error: "File and cover image are required." });
  }

  const uploadedFilePath = path.join(uploadFolder, req.files.file[0].filename);

  try {
    // Upload cover image to Cloudinary
    const coverImagePath = req.files.coverImage[0].path;
    const cloudinaryResult = await cloudinary.uploader.upload(coverImagePath, {
      resource_type: 'image'
    });

    // Save cover image URL to your database
    const coverImageSecureUrl = cloudinaryResult.secure_url;

    if (!coverImageSecureUrl) {
      return res.status(500).json({ error: "Unable to upload cover image" });
    }

    const postFileInstance = new PostFile({
      itemTitle,
      itemType,
      firstName,
      lastName,
      note,
      filePath: uploadedFilePath,
    });

    // Process the uploaded file
    const result = await postFileInstance.registerUpload();

    // Continue the code here...
    const localUpload = await uploadBook(result.itemKey, email, coverImageSecureUrl, itemPrice, category);

    // Delete the cover image file from local storage after uploading to Cloudinary
    fs.unlinkSync(coverImagePath);

    return res.json({
      ...result,
      fromLocalDB: localUpload
    });
  } catch (error: any) {
    // Delete the uploaded file and cover image after processing if there's an error
    fs.unlinkSync(uploadedFilePath);
    if (req.files.coverImage) {
      fs.unlinkSync(req.files.coverImage[0].path);
    }
    console.error(error.message, "ERRORS");
    return res.status(500).json({ error: error.message });
  }
});

export default fileRouter;
