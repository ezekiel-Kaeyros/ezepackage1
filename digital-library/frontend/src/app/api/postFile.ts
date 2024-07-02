import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

// const pump = promisify(pipeline);

const BASE_URL = "https://api.zotero.org";
const API_KEY = "ljJwZLSkS26ymt6DFd5D2Blc";
const USER_ID = 14487670;
const GROUP_ID = 5577831;
const FILE_PATH = '/zoteroFiles/UnderstandMenNow.pdf';

interface ErrorResponse {
  error: string;
  status: number | null;
}

interface FileDetails {
  filename: string;
  filesize: number;
  mtime: number;
  md5Hash: string;
}

export default class PostFile {
  private baseUrl: string;
  private apiKey: string;
  private userId: number;
  private groupId: number;
  private filePath: string;
  private coverPageUrl: string;
  private itemTitle: string | null;
  private itemType: string | null;
  private authorName: string | null;
  private filename: string;
  private note: string;
  private accessDate: string;

  constructor(
    baseUrl: string = BASE_URL,
    apiKey: string = API_KEY,
    userId: number = USER_ID,
    groupId: number = GROUP_ID,
    filePath: string = FILE_PATH,
    coverPageUrl: string = "",
    itemTitle: string | null = null,
    itemType: string | null = null,
    authorName: string | null = null,
    filename: string = path.basename(filePath),
    note: string = "",
    accessDate: string = new Date().toISOString()
  ) {
    this.baseUrl = baseUrl;
    this.groupId = groupId;
    this.userId = userId;
    this.apiKey = apiKey;
    this.filePath = filePath;
    this.coverPageUrl = coverPageUrl;
    this.itemTitle = itemTitle;
    this.itemType = itemType;
    this.authorName = authorName;
    this.filename = filename;
    this.note = note;
    this.accessDate = accessDate;
  }

  private async getFileDetails(): Promise<FileDetails> {
    const filename = path.basename(this.filePath);

    const filePath = path.join(process.cwd(), this.filePath);
    console.log('this is my fileContent', this.filePath);

    // Perform the file operations synchronously, as we are running on the server
    const fileBuffer = fs.readFileSync(filePath);
    console.log('this is my fileContent02');
    const stats = fs.statSync(filePath);
    const filesize = stats.size;
    const mtime = Math.floor(stats.mtimeMs);

    const md5 = crypto.createHash('md5');
    md5.update(fileBuffer);
    const md5Hash = md5.digest('hex');

    return { filename, filesize, mtime, md5Hash };
  }

  private async getAllUserGroups(): Promise<AxiosResponse<any>> {
    const url = `${this.baseUrl}/users/${this.userId}/groups/`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };

    return axios.get(url, { headers });
  }

  private async getItemById(parentItemId: string | null): Promise<AxiosResponse<any> | ErrorResponse> {
    if (parentItemId === null) {
      return { error: "`item_id` cannot be null", status: 400 };
    }

    const url = `${this.baseUrl}/groups/${this.groupId}/items/${parentItemId}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };

    return axios.get(url, { headers });
  }

  private async postParentItem(): Promise<AxiosResponse<any> | ErrorResponse> {
    const url = `${this.baseUrl}/groups/${this.groupId}/items/`;
    const payload = JSON.stringify([
      {
        "itemType": "book",
        "title": this.itemTitle,
        "creators": [
          {
            "creatorType": "author",
            "firstName": this.authorName,
            "lastName": this.authorName
          }
        ],
        "tags": [],
        "collections": [],
        "relations": {},
        "date": "2024",
        "url": "http://example.com/sample-document",
        "accessDate": "2024-06-20"
      }
    ]);
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.post(url, payload, { headers });
      return response;
    } catch (error: any) {
      return { error: "Failed To Create File Environment", status: error.response?.status || null };
    }
  }

  private async postChildItem(): Promise<AxiosResponse<any> | ErrorResponse> {
    if (!this.itemType || !this.itemTitle) {
      return { error: "`item_type` and `item_title` cannot be null", status: 400 };
    }

    const getParentItem = await this.postParentItem();
    if ('error' in getParentItem) {
      return getParentItem;
    }

    const thisDate = this.convertDateFormat(this.accessDate);
    const url = `${this.baseUrl}/groups/${this.groupId}/items/`;
    const payload = JSON.stringify([
      {
        "itemType": "attachment",
        "parentItem": getParentItem.data.successful[0].data.key,
        "linkMode": "imported_file",
        "title": this.itemTitle,
        "accessDate": thisDate,
        "url": this.coverPageUrl,
        "note": this.note,
        "tags": [],
        "relations": {},
        "contentType": "application/pdf",
        "charset": "",
        "filename": this.filename,
        "md5": null,
        "mtime": null
      }
    ]);
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.post(url, payload, { headers });
      return response;
    } catch (error: any) {
      return { error: "Unable To Create File Environment", status: error.response?.status || null };
    }
  }

  private convertDateFormat(thisDate: string): string {
    const date = new Date(thisDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const thatDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    return thatDate;
  }

  private async getUploadAuthorization(): Promise<any> {
    const postChildItem = await this.postChildItem();
    if ('error' in postChildItem) {
      return postChildItem;
    }

    const url = `${this.baseUrl}/groups/${this.groupId}/items/${postChildItem.data.successful[0].key}/file`;
    const { filename, filesize, mtime, md5Hash } = await this.getFileDetails();
    const payload = `md5=${md5Hash}&filename=${filename}&filesize=${filesize}&mtime=${mtime}`;
    const headers = {
      'If-None-Match': '*',
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    try {
      const response = await axios.post(url, payload, { headers });
      response.data["child_item_id"] = postChildItem.data.successful[0].key;
      return { response, result: response.data };
    } catch (error: any) {
      return { error: "Cannot Get Upload Authorization", status: error.response?.status || null };
    }
  }

  private async uploadFile(): Promise<any> {
    const getUploadAuthorization = await this.getUploadAuthorization();
    if ('error' in getUploadAuthorization) {
      return getUploadAuthorization;
    }

    const { response, result } = getUploadAuthorization;
    if (response.status !== 200) {
      return { error: "Upload Authorization Rejected", status: response.status };
    }

    const fileBuffer = fs.readFileSync(this.filePath);
    const uploadContent = Buffer.concat([
      Buffer.from(result.prefix),
      fileBuffer,
      Buffer.from(result.suffix)
    ]);

    try {
      const uploadResponse = await axios.post(result.url, uploadContent, {
        headers: { 'Content-Type': result.contentType }
      });

      if (uploadResponse.status !== 201) {
        return { error: "Failed To Upload File To s3", status: uploadResponse.status };
      }

              return {
          response: "Successful Upload To Zotero s3",
          extra_data: {
            item_id: result.child_item_id,
            upload_key: result.uploadKey
          },
          status: uploadResponse.status
        };
      } catch (error: any) {
        return { error: "Failed To Upload File To s3", status: error.response?.status || null };
      }
    }

    public async registerUpload(): Promise<AxiosResponse<any> | ErrorResponse> {
      const uploadFile = await this.uploadFile();
      if ('error' in uploadFile) {
        return uploadFile;
      }

      const url = `${this.baseUrl}/groups/${this.groupId}/items/${uploadFile.extra_data.item_id}/file`;
      const payload = `upload=${uploadFile.extra_data.upload_key}`;
      const headers = {
        'If-None-Match': '*',
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      try {
        const response = await axios.post(url, payload, { headers });

        if (response.status !== 204) {
          return { error: "File Uploaded To Zotero s3 but Zotero Failed To Register File", status: response.status };
        }

        return response;
      } catch (error: any) {
        return { error: "File Uploaded To Zotero s3 but Zotero Failed To Register File", status: error.response?.status || null };
      }
  }
}
