// @ts-nocheck
import { User } from '../models/user.model';

export const getAuthUser = async (id: string): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: id }, { isOnline: true })
    .select('-password')

  return user;
};

export const getUserById = async (id: string, hideBannedUser?: boolean): Promise<any> => {
  const query = { _id: id };
  if (hideBannedUser) {
    query.banned = { $ne: true };
  }

  const user = await User.findOne(query)
    .select('-password')

  return user;
};

export const getUserByEmail = async (email: string): Promise<any> => {
  const user = await User.findOne({ email });
  return user;
};

export const getUserByUsername = async (username: string): Promise<any> => {
  const user = await User.findOne({ username }).select('-password');
  return user;
};

export const updateUserIsOnline = async (userId: string, isOnline: boolean): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: userId }, { isOnline });
  return user;
};

export const updateUserResetPasswordToken = async (userId: string, token: string): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: userId }, { resetPasswordToken: token });
  return user;
};

export const getUsers = async (): Promise<any> => {
  const users = User.find(query).select('-password').sort({ createdAt: 'desc' });
  return users;
};

export const countUsers = async (): Promise<any> => {
  const total = await User.countDocuments({});
  const verified = await User.countDocuments({ emailVerified: true });
  return { total, verified };
};

export const onlineUsers = async (userId?: string): Promise<any> => {
  const users = User.find({ isOnline: true, _id: { $ne: userId }, banned: { $ne: true } }).select('-password');
  return users;
};

export const updateUser = async (id: string, fieldsToUpdate: any): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: id }, { ...fieldsToUpdate }, { new: true })

  return user;
};

export const deleteUser = async (id: string): Promise<any> => {
  const user = await User.findByIdAndRemove(id);
  return user;
};

export const updateUserBanned = async (id: string, banned: boolean): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: id }, { banned: banned }, { new: true });

  return user;
};