import { Account } from 'src/Finance/account/entities/account.entity';
import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({
    type: 'decimal',
    precision: DEFAULT_INTEGER,
    scale: DEFAULT_DECIMAL,
  })
  amount: number;
}
