// src/services/zoteroService.ts
import axios from 'axios';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const BaseUrl = 'https://api.zotero.org';
const ApiKey = 'ljJwZLSkS26ymt6DFd5D2Blc';
const UserId = '14487670';
const GroupId = '5577831';

let date = new Date();
let formattedDate = date.getUTCFullYear() + '-' +
  ('0' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
  ('0' + date.getUTCDate()).slice(-2) + ' ' +
  ('0' + date.getUTCHours()).slice(-2) + ':' +
  ('0' + date.getUTCMinutes()).slice(-2) + ':' +
  ('0' + date.getUTCSeconds()).slice(-2);

interface PostFileOptions {
  baseUrl?: string;
  apiKey?: string;
  userId?: string;
  groupId?: string;
  filePath: string;
  coverPageUrl?: string;
  itemTitle: string;
  itemType: string;
  firstName: string,
  lastName: string,
  // authorName: string;
  filename?: string;
  note?: string;
  accessDate?: string;
}

export class PostFile {
  private baseUrl: string;
  private apiKey: string;
  private userId: string;
  private groupId: string;
  private firstName: string;
  private lastName: string;
  private filePath: string;
  private coverPageUrl: string;
  private itemTitle: string;
  private itemType: string;
  // private authorName: string;
  private filename: string;
  private note: string;
  private accessDate: string;

  constructor({
    baseUrl = BaseUrl,
    apiKey = ApiKey,
    userId = UserId,
    groupId = GroupId,
    firstName,
    lastName,
    filePath,
    coverPageUrl = '',
    itemTitle,
    itemType,
    note,
    // authorName,
    filename = path.basename(filePath),
    accessDate = formattedDate,
  }: PostFileOptions) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.userId = userId;
    this.groupId = groupId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.filePath = filePath;
    this.coverPageUrl = coverPageUrl;
    this.itemTitle = itemTitle;
    this.itemType = itemType;
    // this.authorName = authorName;
    this.filename = filename;
    this.note = note;
    this.accessDate = accessDate;
  }

  private async getFileDetails() {
    const filename = path.basename(this.filePath);
    const filesize = fs.statSync(this.filePath).size;
    const mtime = fs.statSync(this.filePath).mtimeMs;
    const md5 = crypto.createHash('md5');
    const fileBuffer = fs.readFileSync(this.filePath);
    md5.update(fileBuffer);
    const md5Hash = md5.digest('hex');
    return { filename, filesize, mtime, md5Hash };
  }

  private async getAllUserGroups() {
    const url = `${this.baseUrl}/users/${this.userId}/groups/`;
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  private async getItemById(parentItemId: string) {
    const url = `${this.baseUrl}/groups/${this.groupId}/items/${parentItemId}`;
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  private async deleteItemById(itemId: string, itemVersion: number) {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${this.baseUrl}/groups/${this.groupId}/items/${itemId}`,
      headers: { 
        'Authorization': `Bearer ${this.apiKey}`, 
        'If-Unmodified-Since-Version': `${itemVersion}`,
        'Content-Type': 'application/json',

      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
  }

  private async postParentItem() {
    const url = `${this.baseUrl}/groups/${this.groupId}/items/`;
    const payload = [
      {
        itemType: 'book',
        title: this.itemTitle,
        creators: [{ creatorType: 'author', firstName: this.firstName, lastName: this.lastName }],
        tags: [],
        collections: [],
        relations: {},
        date: '2024',
        url: 'http://example.com/sample-document',
        accessDate: '2024-06-20',
      },
    ];
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, payload, { headers });

    if (response.status !== 200) {
      throw new Error('Unable to create parent item');
    }
    return response.data;
  }

  private async postChildItem() {
    if (!this.itemType || !this.itemTitle) {
      throw new Error('`item_type` and `item_title` cannot be of type `None`');
    }
    const parentItem = await this.postParentItem();
    const url = `${this.baseUrl}/groups/${this.groupId}/items/`;

    const payload = [
      {
        itemType: this.itemType,
        parentItem: parentItem.successful['0'].key,
        linkMode: 'imported_file',
        title: this.itemTitle,
        accessDate: this.accessDate,
        url: this.coverPageUrl,
        note: this.note,
        tags: [],
        relations: {},
        contentType: 'application/pdf',
        charset: '',
        filename: this.filename,
        md5: null,
        mtime: null,
      },
    ];
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, payload, { headers });

    if (response.status !== 200) {
      throw new Error('Unable to create child item');
    }

    const parentItemDetail = {
      "key": parentItem["successful"]["0"]["data"]["key"],
      "version": parentItem["successful"]["0"]["data"]["version"]
    }
    return {
      "data": response.data,
      "parentItem": parentItemDetail
    }
  }

  private async getUploadAuthorization() {
    const childItem = await this.postChildItem();
    // if (childItem.failed && childItem.failed['0'].code === 400) {
    //   throw new Error('Unable to create file environment');
    // }

    const url = `${this.baseUrl}/groups/${this.groupId}/items/${childItem["data"].successful['0'].key}/file`;
    

    const { filename, filesize, mtime, md5Hash } = await this.getFileDetails();

    const payload = `md5=${md5Hash}&filename=${filename}&filesize=${filesize}&mtime=${mtime}`;
    const headers = {
      'If-None-Match': '*',
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const response = await axios.post(url, payload, { headers });

    console.log(response, 'this is my response')

    if (response.status !== 200 || ('exists' in response.data)) {
      const baseError = "Cannot get upload authorization."
      const deleteItem = await this.deleteItemById(childItem["parentItem"]["key"], childItem["parentItem"]["version"])

      if (('exists' in response.data)) {
        throw new Error(baseError + " Duplicate Files Not Allowed. Upload something new or update already existing file")
      }
      throw new Error('Cannot get upload authorization');
    }
    return {
      ...response.data,
      child_item_id: childItem["data"].successful['0'].key,
    };
  }

  private async uploadFile() {
    const uploadAuthorization = await this.getUploadAuthorization();
    const fileContent = fs.readFileSync(this.filePath);
    const uploadContent = Buffer.concat([
      Buffer.from(uploadAuthorization.prefix),
      fileContent,
      Buffer.from(uploadAuthorization.suffix),
    ]);

    try {
      const response = await axios.post(uploadAuthorization.url, uploadContent, {
        headers: { 'Content-Type': uploadAuthorization.contentType },
      });
      if (response.status !== 201) {
        throw new Error('Failed to upload file to S3');
      }

      return {
        item_id: uploadAuthorization.child_item_id,
        upload_key: uploadAuthorization.uploadKey,
      };
    } catch (error) {
      throw new Error('File could not be uploaded to s3');
    }

  }

  public async registerUpload() {
    const uploadFile = await this.uploadFile();
    const url = `${this.baseUrl}/groups/${this.groupId}/items/${uploadFile.item_id}/file`;

    try {
      const payload = `upload=${uploadFile.upload_key}`;
      const headers = {
        'If-None-Match': '*',
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const response = await axios.post(url, payload, { headers });
      if (response.status !== 204) {
        throw new Error('File uploaded to Zotero S3 but failed to register');
      }
      return response.data;
    } catch (error) {
      throw new Error("File was not registered to s3")
    }
  }
}