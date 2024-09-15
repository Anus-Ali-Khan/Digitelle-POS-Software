import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { UpdateProfile } from '../dto/updateProfile.dto';
import { Role, User } from '../schema/user.schema';
import {
  ChangePasswordType,
  GetAllUserType,
  UpdateProfileType,
} from '../types/user.type';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    // private jwtService: JwtService
  ) {}
  async updateProfile(
    id: string,
    updateProfile: UpdateProfile
  ): Promise<UpdateProfileType> {
    const { name, profileImage, phoneNumber } = updateProfile;
    const user = await this.userModel.findByIdAndUpdate(
      id,
      {
        name,
        phoneNumber,
        profileImage,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return { user };
  }

  async getSingleProfile(id: string): Promise<User> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async getAllUser(): Promise<GetAllUserType> {
    const users = await this.userModel.find({
      role: [Role.USER, Role.SUBADMIN],
    });
    return { data: users };
  }

  async deleteProfile(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async changePassword(id: string, body: any): Promise<ChangePasswordType> {
    const user = await this.userModel.findById(id);
    if (!(await bcrypt.compare(body.oldPassword, user.password))) {
      throw new BadRequestException('Old password is incorrect.');
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    user.password = hashedPassword;
    await user.save();
    return { message: 'Password changed successfully.' };
  }
}
