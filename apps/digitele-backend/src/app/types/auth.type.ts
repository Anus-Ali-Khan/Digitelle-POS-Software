import { User } from '../schema/user.schema';

export type Login = {
  data: {
    token: string;
    user: User;
  };
};
