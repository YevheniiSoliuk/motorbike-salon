import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import AuthService from './auth.service';
import SigninDto from './dto/signin.dto';
import { Response } from 'express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtRefreshGuard from './guards/jwt-refresh.guard';
import RegisterDto from './dto/register.dto';
import UserDto from 'src/users/dto/user.dto';
import { plainToInstance } from 'class-transformer';
import RequestWithUser from './dto/request-with-user.dto';

@ApiTags('Auth')
@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ type: UserDto })
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: SigninDto })
  @Post('login')
  async login(@Body() loginData: SigninDto, @Res() res: Response) {
    const { accessToken, refreshToken, user } =
      await this.authService.signIn(loginData);
    res.setHeader('Access-Token', accessToken);
    res.setHeader('Refresh-Token', refreshToken);

    res
      .status(HttpStatus.OK)
      .json(plainToInstance(UserDto, user, { strategy: 'exposeAll' }));
  }

  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: RegisterDto })
  @Post('register')
  async register(@Body() registerBody: RegisterDto, @Res() res: Response) {
    await this.authService.register(registerBody);

    res.sendStatus(HttpStatus.OK);
  }

  @UseGuards(JwtRefreshGuard)
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refresh(@Req() req: RequestWithUser, @Res() res: Response) {
    const { user } = req;
    const accessToken = await this.authService.getAccessToken(user);

    res.setHeader('Access-Token', accessToken);
    res.sendStatus(HttpStatus.OK);
  }
}
