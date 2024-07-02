"use client";

import { Button } from "../button/Button";

type ButtonUplaodProps = {
    uploadFile: any;
}

export const ButtonUpload: React.FC<ButtonUplaodProps> = (props) => {

  return (
    <div className="w-full">
      <Button
        className="w-fit rounded-md"
        onClick={props.uploadFile}
      >
        Upload File
      </Button>
    </div>
  );
};
