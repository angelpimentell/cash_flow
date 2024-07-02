import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './Finance/account/account.module';
import { TransactionModule } from './Finance/transaction/transaction.module';

@Module({
  imports: [AccountModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
