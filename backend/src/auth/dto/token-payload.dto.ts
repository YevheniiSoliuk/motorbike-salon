import { UUID } from 'crypto';

export default class TokenPayloadDto {
  sub: UUID;
  name: string;
}
