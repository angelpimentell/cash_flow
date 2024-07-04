import {IsDecimal, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsDecimal()
  balance: number;

  @IsNumber()
  account_id: number;
}
