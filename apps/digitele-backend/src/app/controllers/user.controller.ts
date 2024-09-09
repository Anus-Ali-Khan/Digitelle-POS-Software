import { Controller, UseGuards } from '@nestjs/common/decorators/core';
import {
    Body,
    Delete,
    Get,
    Param,
    Put,
    Req,
} from '@nestjs/common/decorators/http';
import { AuthGuard } from '@nestjs/passport';
import { UpdateProfile } from '../dto/updateProfile.dto';
import { User } from '../schema/user.schema';
import { UserService } from '../services/user.service';
import {
    ChangePasswordType,
    GetAllUserType,
    UpdateProfileType,
} from '../types/user.type';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @UseGuards(AuthGuard())
  @Put('/updateProfile/:id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfile: UpdateProfile
  ): Promise<UpdateProfileType> {
    return this.UserService.updateProfile(id, updateProfile);
  }

  @UseGuards(AuthGuard())
  @Get('/getProfile/:id')
  singleProfile(@Param('id') id: string): Promise<User> {
    return this.UserService.getSingleProfile(id);
  }

  @UseGuards(AuthGuard())
  @Delete('/deleteAccount/:id')
  deleteProfile(
    @Param('id')
    id: string
  ): Promise<User> {
    return this.UserService.deleteProfile(id);
  }

  @UseGuards(AuthGuard())
  @Get('/getAllUser')
  getAllUser(): Promise<GetAllUserType> {
    return this.UserService.getAllUser();
  }

  @UseGuards(AuthGuard())
  @Put('/changePassword')
  changePassword(
    @Body() body: string,
    @Req() request: any
  ): Promise<ChangePasswordType> {
    const userId = (request.user as User).id;
    return this.UserService.changePassword(userId, body);
  }
}
