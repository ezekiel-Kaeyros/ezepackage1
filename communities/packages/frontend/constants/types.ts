export enum UserRole {
  Regular = 'Regular',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
}

export interface AuthUser {
  image?:any
  _id: string;
  role: UserRole;
  fullName?: string;
  email?: string;
  createdAt?: Date;
  notifications: [];
  followers: [];
  following: [];
  facebookId?: string;
  googleId?: string;
  githubId?: string;
  about?: string;
  website?: string;
}

export interface Channel {
  _id?: string;
  name: string;
  authRequired: boolean;
  description?: string;
  createdAt: string;
  order: number;
  members?: number;
  coverImage?: string;
  image?:string
}

export interface Post {
  _id: string;
  title: string;
  image?: string;
  imagePublicId?: string;
  channel: Channel;
  author: any;
  createdAt: string;
  updatedAt: string;
  likes: [];
  comments: any[];
  pinned?: boolean;
  postId?:string
}
