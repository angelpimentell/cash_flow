import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { Transaction } from 'src/Finance/transaction/entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: DEFAULT_INTEGER, scale: DEFAULT_DECIMAL })
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
}
