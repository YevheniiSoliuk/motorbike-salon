import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtGuard from 'src/auth/guards/jwt.guard';
import { UUID } from 'crypto';
import UserDto from './dto/user.dto';
import { Response } from 'express';
import { plainToInstance } from 'class-transformer';
import User from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtGuard)
  @ApiResponse({ type: UserDto })
  @Get(':uuid')
  async currentUser(@Param('uuid') uuid: UUID, @Res() res: Response) {
    const user = await this.usersService.findOneByUuid(uuid);
    res
      .status(HttpStatus.OK)
      .json(plainToInstance(UserDto, user, { strategy: 'exposeAll' }));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
