import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  username: string;
  email: string;
  role: string;
  subscription: string;
  firstTime: boolean;
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  subscription: { type: String, required: true },
  firstTime: { type: Boolean, required: false }
});

export const User = mongoose.model<IUser>('User', UserSchema);
