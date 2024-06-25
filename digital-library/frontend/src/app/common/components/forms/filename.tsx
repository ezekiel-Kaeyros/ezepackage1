import React, { FC, useState } from 'react';
import crossIcom from '../../../../../public/icons/close-square.svg';
import Image from 'next/image';

type FilenameProps = {
  filename: string;
  handleRemoveFile:() => void;
};

const Filename: FC<FilenameProps> = ({ filename, handleRemoveFile }) => {
  const [deletFile, setDeleteFile] = useState();
//   const handleDeleteFile = (id: number) => {
//     filename.filter((file) => file.id === id);
//   };

  return (
    <div className='grid grid-cols-1 mt-5 gap-3'>
      {/* { filename && filename?.map(({ name }) => { */}
        {/* return ( */}
          <div className="border border-[lightgray] rounded-lg">
            <div className='flex justify-between px-3 py-4'>
              <div><h1>{filename}</h1></div>
              <div>
                {/* <Image src={crossIcom} alt="cross Icon" className='cursor-pointer' onClick={handleRemoveFile}/> */}
              </div>
            </div>
          </div>
        {/* ); */}
      {/* })} */}
    </div>
  );
};

export default Filename;
