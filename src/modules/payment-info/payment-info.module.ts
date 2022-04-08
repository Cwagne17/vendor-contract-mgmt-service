import { Module } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { PaymentInfoController } from './payment-info.controller';
import { PaymentInfo } from './entities/payment-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentInfo])],
  controllers: [PaymentInfoController],
  providers: [PaymentInfoService]
})
export class PaymentInfoModule {}
