import { User } from '../schema/user.schema';

export type UpdateProfileType = {
  user: User;
};

export type GetAllUserType = {
  data: User[]
};

export type ChangePasswordType = {
    message: string
};
