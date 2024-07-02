import fs from 'fs';
import path from 'path';

export async function GetStaticProps(filePath: string) {
  const absoluteFilePath = path.join(process.cwd(), filePath);
  const fileBuffer02 = fs.readFileSync(absoluteFilePath);
  const fileSize = fs.statSync(absoluteFilePath).size;
  const mtime02 = Math.floor(fs.statSync(absoluteFilePath).mtimeMs);

  return {
    props: {
      fileBuffer02,
      fileSize,
      mtime02,
    },
  };
}
