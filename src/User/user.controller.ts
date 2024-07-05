import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from './auth.guard';
import { signUserDto } from './dto/sign-in-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Public()
  @Post('sign-in')
  signIn(@Body() createUserDto: signUserDto) {
    const { username, password } = createUserDto;
    return this.userService.signIn(username, password);
  }

  @Public()
  @Post('sign-up')
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
