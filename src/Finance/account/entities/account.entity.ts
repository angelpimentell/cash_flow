import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { Transaction } from 'src/Finance/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.accounts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column('decimal', {
    precision: DEFAULT_INTEGER,
    scale: DEFAULT_DECIMAL,
    default: '0.00',
  })
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
}
