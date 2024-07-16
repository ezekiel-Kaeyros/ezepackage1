import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface ZoteroConfig {
  zoteroBaseUrl: string;
  zoteroGroupId: string;
  zoteroFileId: string;
  zoteroApiKey: string;
}

export async function POST(req: NextRequest) {
  const config: ZoteroConfig = await req.json();
  const { zoteroBaseUrl, zoteroGroupId, zoteroFileId, zoteroApiKey } = config;

  const url = `${zoteroBaseUrl}/groups/${zoteroGroupId}/items/${zoteroFileId}/file`;
  const headers = {
    Authorization: `Bearer ${zoteroApiKey}`,
  };

  // try {
  //   const response = await axios.get(url, {
  //     headers,
  //     responseType: 'stream', // Ensure response is treated as stream
  //   });

  //   // Define the path where you want to save the file
  //   const savePath = path.join(process.cwd(), 'public', 'Downloads', `${zoteroFileId}.pdf`);

  //   // Ensure the directory exists before saving
  //   await fs.promises.mkdir(path.dirname(savePath), { recursive: true });

  //   // Pipe the response stream to the file
  //   const writer = fs.createWriteStream(savePath);
  //   response.data.pipe(writer);

  //   // Return the path to the downloaded file
  //   const filePath = `/Downloads/${zoteroFileId}.pdf`;
  //   return NextResponse.json({ filePath }, { status: 200 });
  // } catch (error: any) {
  //   console.error('Error downloading Zotero file:', error);
  //   return NextResponse.json({ error: 'Error downloading Zotero file' }, { status: 500 });
  // }

  try {
    const response = await axios.get(url, {
      headers,
      responseType: 'arraybuffer', // Treat the response as an array buffer
    });
  
    // Define the path where you want to save the file
    const savePath = path.join(process.cwd(), 'public', 'Downloads', `${zoteroFileId}.pdf`);
  
    // Ensure the directory exists before saving
    await fs.promises.mkdir(path.dirname(savePath), { recursive: true });
  
    // Write the buffer data to the file
    await fs.promises.writeFile(savePath, response.data);
  
    // Return the path to the downloaded file
    const filePath = `/Downloads/${zoteroFileId}.pdf`;
    return NextResponse.json({ filePath }, { status: 200 });
  } catch (error) {
    console.error('Error downloading Zotero file:', error);
    return NextResponse.json({ error: 'Error downloading Zotero file' }, { status: 500 });
  }
  
}
