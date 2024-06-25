import { Request, Response } from 'express';
import { getUserById, getUsers, onlineUsers, updateUser, updateUserBanned } from '../db/user';
import { AuthUser, ErrorCodes, ErrorMessages, UserRole } from '../constants';


const UserController = {
  user: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const user = await getUserById(id, true);
    return res.status(200).json(user);
  },
  getUsers: async (req: Request, res: Response): Promise<any> => {
    const authUser = req.user as AuthUser;
    const { offset, limit, emailVerified } = req.query;
    const users = await getUsers();
    return res.status(200).json(users);
  },
  onlineUsers: async (req: Request, res: Response): Promise<any> => {
    const authUser = req.user as AuthUser;
    const users = await onlineUsers(authUser?._id);
    return res.status(200).json(users);
  },
  banUser: async (req: Request, res: Response): Promise<any> => {
    const { id, banned } = req.body;

    const user = await getUserById(id);

    if (user.role === UserRole.SuperAdmin) {
      return res.status(ErrorCodes.Bad_Request).send(`You can't ban Super Admin users!`);
    }

    const bannedUser = await updateUserBanned(id, banned);

    return res.status(200).json(bannedUser);
  }
};

export default UserController;
