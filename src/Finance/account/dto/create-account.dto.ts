import { IsNumber, IsString, IsDecimal } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsNumber()
  user_id: number;
}
