import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsHash, IsNumber, IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { UUID } from 'crypto';
import RoleDto from 'src/roles/dto/role.dto';
import Role from 'src/roles/entities/role.entity';

export default class UserDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsUUID(4)
  uuid: UUID;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @IsHash('sha512')
  @Exclude()
  passwordHash: string;

  @IsHash('sha512')
  @Exclude()
  refreshHash: string;

  @ApiProperty({ type: RoleDto })
  role: Role;
}
