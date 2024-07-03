import { Account } from 'src/Finance/account/entities/account.entity';
import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: DEFAULT_INTEGER, scale: DEFAULT_DECIMAL })
  amount: number;

  @ManyToOne(() => Account)
  account_source_id: Account;

  @ManyToOne(() => Account)
  account_destination_id: string;
}
