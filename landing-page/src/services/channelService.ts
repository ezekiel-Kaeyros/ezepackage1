import DataService from './dataService';

export default class ChannelService extends DataService {
  channel = (): Promise<{
    data: {
      authRequired: string;
      createdAt: string;
      description: string;
      name: string;
      order: 0;
      updatedAt: string;
      __v: 0;
      _id: string;
      members?:number
    }[];
  }> => {
    return this.get('/channels');
  };

  //   register = (data: { email: string; password: string; fullName: string }) => {
  //     return this.post('/signup', data);
  //   };

  //   forgottenPassword = (data: any) => {
  //     return this.post('/auth/forgottenPassword', data);
  //   };
}
