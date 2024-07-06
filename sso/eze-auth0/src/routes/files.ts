// src/routes/files.ts
// import { Router, Request, Response } from 'express';
// import { PostFile } from '../services/files';
// import * as path from 'path';

// const fileRouter = Router();
// const pdfPath = path.join(__dirname, '..', 'SamplePDFFile_5mb.pdf');

// fileRouter.post('/upload', async (req: Request, res: Response) => {
//   const { itemTitle, itemType, firstName, lastName, filePath } = req.body;
//   const postFileInstance = new PostFile({
//     itemTitle,
//     itemType,
//     firstName,
//     lastName,
//     filePath
//   });
//   try {
//     const result = await postFileInstance.registerUpload();
//     res.json(result);
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default fileRouter;


import { Router, Request, Response } from 'express';
import multer from 'multer';
import { PostFile } from '../services/files';
import * as path from 'path';
import fs from 'fs';

const fileRouter = Router();
const uploadFolder = path.join(__dirname, '..', 'uploads');

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

fileRouter.post('/upload', upload.single('file'), async (req: any, res: any) => {
 const { itemTitle, itemType, firstName, lastName, note } = req.body;
 const uploadedFilePath = path.join(uploadFolder, req.file.filename); // Example path, adjust as needed

 const postFileInstance = new PostFile({
   itemTitle,
   itemType,
   firstName,
   lastName,
   note,
   filePath: uploadedFilePath,
 });

  try {

    // Process the uploaded file
    const result = await postFileInstance.registerUpload();

   console.info(result, "RESULTS")

   res.json(result);
 } catch (error: any) {
  // Delete the uploaded file after processing
  fs.unlinkSync(uploadedFilePath);
  console.error(error.message, "ERRORS")
   res.status(500).json({error: error.message})
 }
});

export default fileRouter;
