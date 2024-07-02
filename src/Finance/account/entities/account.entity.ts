import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: DEFAULT_INTEGER, scale: DEFAULT_DECIMAL })
  balance: number;
}
