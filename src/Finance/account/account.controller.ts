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
  update(
    @Request() rq,
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    const accountData = { id: id, user_id: rq.user.sub };
    return this.accountService.update(accountData, updateAccountDto);
  }

  @Delete(':id')
  remove(@Request() rq, @Param('id') id: string) {
    const accountData = { id: id, user_id: rq.user.sub };
    return this.accountService.remove(accountData);
  }
}
