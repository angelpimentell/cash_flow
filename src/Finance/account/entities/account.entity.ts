import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  balance: number;
}
