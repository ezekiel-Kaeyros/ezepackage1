// @ts-nocheck
import { User } from '../models';

export const getAuthUser = async (id: string): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: id }, { isOnline: true })
    .select('-password')
    .populate({ path: 'posts', options: { sort: { createdAt: 'desc' } } })
    .populate('likes')
    .populate('followers')
    .populate('following')
    .populate('joinedChannels')
    .populate({
      path: 'notifications',
      populate: [
        { path: 'author' },
        { path: 'like', populate: { path: 'post' } },
        { path: 'comment', populate: { path: 'post' } },
      ],
      match: { seen: false },
    });

  return user;
};

export const getUserById = async (id: string, hideBannedUser?: boolean): Promise<any> => {
  const query = { _id: id };
  if (hideBannedUser) {
    query.banned = { $ne: true };
  }

  const user = await User.findOne(query)
    .select('-password')
    .populate('likes')
    .populate('followers')
    .populate('following')
    .populate('joinedChannels')
    .populate({
      path: 'notifications',
      populate: [{ path: 'author' }, { path: 'follow' }, { path: 'like' }, { path: 'comment' }],
    });

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

export const createUser = async (
  fullName: string,
  username: string,
  email: string,
  password: string,
  isOnline?: boolean
): Promise<any> => {
  const user = await User.create({
    fullName,
    username,
    email,
    password,
    isOnline,
  });
  return user;
};

export const getUsers = async (
  offset: number,
  limit: number,
  authUserId?: string,
  emailVerified?: boolean,
  hideBannedUsers?: boolean,
  searchQuery?: string
): Promise<any> => {
  const query = { _id: { $ne: authUserId } };
  if (emailVerified) {
    query.emailVerified = emailVerified;
  }
  if (hideBannedUsers) {
    query.banned = { $ne: true };
  }
  if (searchQuery) {
    query['$or'] = [
      { username: new RegExp(searchQuery, 'i') },
      { fullName: new RegExp(searchQuery, 'i') },
      { email: new RegExp(searchQuery, 'i') },
    ];
  }

  const users = User.find(query).select('-password').skip(offset).limit(limit).sort({ createdAt: 'desc' });
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

export const getNewMembers = async (userId?: string): Promise<any> => {
  const users = User.find({ _id: { $ne: userId }, banned: { $ne: true } })
    .select('-password')
    .limit(3)
    .sort({ createdAt: -1 });
  return users;
};

export const updateUser = async (id: string, fieldsToUpdate: any): Promise<any> => {
  const user = await User.findOneAndUpdate({ _id: id }, { ...fieldsToUpdate }, { new: true })
    .populate('posts')
    .populate('likes');
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

export const joinChannel = async (channelId: string, userId: string): Promise<any> => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.joinedChannels.includes(channelId)) {
      throw new Error('User already joined the channel');
    }

    user.joinedChannels.push(channelId);

    console.log('User before saving', user);

    await user.save();
    console.log('user after saving', user);

    return user;
  } catch (error) {
    throw new Error(`Error joining channel: ${error.message}`);
  }
};

export const leaveChannel = async (channelId: string, userId: string): Promise<any> => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.joinedChannels.includes(channelId)) {
      throw new Error('User has not joined the channel');
    }

    user.joinedChannels = user.joinedChannels.filter((id) => id != channelId);

    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Error leaving channel: ${error.message}`);
  }
};
