import axios from 'axios';
import { UserRole } from '../constants';
import config from './config';

export const redirectToHome = () => {
  return {
    redirect: {
      permanent: false,
      destination: config.communitiesUrl,
    },
    props: {},
  };
};

export const isAuthorized = async (req, requiredRole = UserRole.Regular): Promise<boolean> => {
  try {
    const { data: user } = await axios.get('/auth-user', {
      headers: {
        Authorization: `bearer ${req.cookies.token}`,
      },
    });

    console.log('user', user);

    if (!user) {
      return false;
    }

    // Super Admin
    if (requiredRole === UserRole.SuperAdmin && user.role !== UserRole.SuperAdmin) {
      return false;
    }

    // Admin
    if (requiredRole === UserRole.Admin) {
      const isSuperAdmin = user.role === UserRole.SuperAdmin;
      const isAdmin = user.role === UserRole.Admin;
      if (!isSuperAdmin && !isAdmin) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
};
