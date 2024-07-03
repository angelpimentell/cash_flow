import { DEFAULT_DECIMAL, DEFAULT_INTEGER } from 'src/constants';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: DEFAULT_INTEGER, scale: DEFAULT_DECIMAL })
  balance: number;
}
