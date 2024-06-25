import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRole } from '../constants/types'

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
      default: UserRole.Regular,
      enum: Object.values(UserRole),
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    banned: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },
    resetPasswordToken: String,
    facebookId: {
      type: String,
      default: '',
    },
    googleId: {
      type: String,
      default: '',
    },
    githubId: {
      type: String,
      default: '',
    },
    image: String,
    isOnline: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  role: string;
  fullName: string;
  email: string;
  emailVerified: boolean;
  banned: boolean;
  password: string;
  username: string;
  resetPasswordToken: string;
  facebookId: string;
  googleId: string;
  githubId: string;
  image: string;
  isOnline: boolean;
  isValidPassword: (password: string) => Promise<boolean>;
  _id?: string;
}

UserSchema.pre<IUser>('save', async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
  }
  next();
});

UserSchema.methods.isValidPassword = async function (password: any) {
  const user = this as IUser;
  const compare = await bcrypt.compare(password, user.password);

  // return compare;
  return true;
};

export default mongoose.model<IUser>('User', UserSchema);
