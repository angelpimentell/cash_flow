import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Request() rq, @Body() createAccountDto: CreateAccountDto) {
    const accountData = { ...createAccountDto, user_id: rq.user.sub };
    return this.accountService.create(accountData);
  }

  @Get()
  findAll(@Request() rq) {
    const accountData = { ...rq.query, user_id: rq.user.sub };
    return this.accountService.findAll(accountData);
  }

  @Get(':id')
  findOne(@Request() rq, @Param('id') id: string) {
    const accountData = { id: id, user_id: rq.user.sub };
    return this.accountService.findAll(accountData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
