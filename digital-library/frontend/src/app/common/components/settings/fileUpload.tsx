"use client"
import PostFile from "@/app/api/postFile";
import { ButtonUpload } from "./buttonUpload";
import { Button } from "../button/Button";

export const UploadFile = () => {
  // Example usage
  const postFileInstance = new PostFile(
    "https://api.zotero.org",
    "ljJwZLSkS26ymt6DFd5D2Blc",
    14487670,
    5577831,
    '/zoteroFiles/UnderstandMenNow.pdf',
    "",
    "4hrs Deep Everyday",
    "attachment",
    "The New Author",
    "this is my fileName",
    "legend of the seeker"
  );

  const uploadFile = async () => {
    try {
      const response = await postFileInstance.registerUpload();
      // Handle successful response
      console.log('File uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="w-full">
      <Button
        className="w-fit rounded-md"
        onClick={uploadFile}
      >
        Upload File
      </Button>
    </div>
  );
};
