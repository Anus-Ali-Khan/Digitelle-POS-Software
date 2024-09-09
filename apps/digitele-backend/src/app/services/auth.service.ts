import { UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from '../dto/signup.dto';
import { LoginDto } from '../dto/login.dto';
import { Injectable } from '@nestjs/common/decorators/core';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Login } from '../types/auth.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password, role, profileImage } = signUpDto;
    const isExisting = await this.userModel.findOne({ email: email });
    if (isExisting) {
      throw new BadRequestException('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      role,
      password: hashedPassword,
      profileImage,
    });
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<Login> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { data: { token, user } };
  }
}
