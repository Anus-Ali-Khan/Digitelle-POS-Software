import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { SignUpDto } from '../dto/signup.dto';
import { AuthService } from '../services/auth.service';
import { Login } from '../types/auth.type';

@Controller('auth')
export class AuthController {
  constructor(public authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<Login> {
    return this.authService.login(loginDto);
  }
}
