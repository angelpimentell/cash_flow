import { Account } from 'src/Finance/account/entities/account.entity';
import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => Account)
  account_source_id: Account;

  @ManyToOne(() => Account)
  account_destination_id: string;
}
