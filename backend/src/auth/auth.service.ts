import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import SigninDto from './dto/signin.dto';
import argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import User from 'src/users/entities/user.entity';
import RegisterDto from './dto/register.dto';
import { RolesService } from 'src/roles/roles.service';
import { randomUUID } from 'crypto';

@Injectable()
export default class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signIn(signinDto: SigninDto): Promise<{
    accessToken: string;
    refreshToken: string;
    user: User;
  }> {
    const user = await this.usersService.findOneByEmail(signinDto.email);
    const isCorrectPassword = await this.verifyPassword(
      signinDto.password,
      user.passwordHash,
    );

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.getAccessToken(user);
    const refreshToken = await this.getRefreshToken(user);
    this.hashAndSaveRefreshTokenForUser(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async register(registerDto: RegisterDto) {
    const { firstName, lastName, password, email } = registerDto;
    const userRole = await this.rolesService.getRoleByName('user');
    const passwordHash = await this.hash(password);
    const uuid = randomUUID();

    await this.usersService.create({
      uuid,
      firstName,
      lastName,
      email,
      passwordHash,
      role: userRole,
    });
  }

  async getAccessToken(user: User) {
    const expiresIn = this.configService.get<number>(
      'ACCESS_TOKEN_EXPIRES_IN_SECONDS',
    );
    const nowTimestamp = Math.floor(Date.now() / 1000);
    const tokenExpireTimestamp = nowTimestamp + Number(expiresIn);
    const payload: Record<string, any> = {
      sub: user.uuid,
      name: user.email,
      iat: nowTimestamp,
    };

    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: tokenExpireTimestamp,
    });
  }

  private async getRefreshToken(user: User) {
    const expiresIn = this.configService.get<number>(
      'REFRESH_TOKEN_EXPIRES_IN_SECONDS',
    );
    const nowTimestamp = Math.floor(Date.now() / 1000);
    const tokenExpireTimestamp = nowTimestamp + Number(expiresIn);
    const payload: Record<string, any> = {
      sub: user.uuid,
      name: user.email,
      iat: nowTimestamp,
    };

    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn: tokenExpireTimestamp,
    });
  }

  private async hashAndSaveRefreshTokenForUser(userId: number, token: string) {
    const refreshHash = await this.hash(token);
    await this.usersService.update(userId, { refreshHash });
  }

  async validateRefreshToken(token: string, user: User) {
    return await argon2.verify(user.refreshHash, token);
  }

  private async verifyPassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      return await argon2.verify(hashedPassword, plainPassword);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  private async hash(value: string): Promise<string> {
    try {
      return await argon2.hash(value);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
