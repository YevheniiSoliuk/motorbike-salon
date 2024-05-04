import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import TokenPayloadDto from '../dto/token-payload.dto';
import { UsersService } from 'src/users/users.service';
import AuthService from '../auth.service';

@Injectable()
export default class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request['Refresh-Token'];
        },
      ]),
      secretOrKey: configService.get('REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: TokenPayloadDto) {
    const user = await this.usersService.findOneByUuid(payload.sub);
    const refreshToken = request.headers['Refresh-Token'];
    const unauthorizedException = new UnauthorizedException();

    if (refreshToken) {
      if (await this.authService.validateRefreshToken(refreshToken, user)) {
        return user;
      }

      throw unauthorizedException;
    }

    throw unauthorizedException;
  }
}
