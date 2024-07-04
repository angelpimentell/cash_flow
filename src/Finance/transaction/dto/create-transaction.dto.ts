import {IsDecimal, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsDecimal()
  amount: number;

  @IsNumber()
  account_id: number;
}
