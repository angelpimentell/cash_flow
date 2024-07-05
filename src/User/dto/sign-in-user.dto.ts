import { IsString, IsNotEmpty } from 'class-validator';

export class signUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
