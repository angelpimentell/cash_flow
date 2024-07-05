import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.save(createAccountDto);
  }

  async findAll(user: object): Promise<Account[]> {
    return await this.accountRepository.find({
      where: user,
    });
  }

  async findOne(id: number): Promise<Account | null> {
    return await this.accountRepository.findOneBy({ id });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    return await this.accountRepository.update(id, updateAccountDto);
  }

  async remove(id: number) {
    return await this.accountRepository.delete(id);
  }
}
