import { IsNumber, IsString, IsDecimal, IsNotEmpty, ValidateNested } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  user_id: User;
}
