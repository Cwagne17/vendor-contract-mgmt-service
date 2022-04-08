import { Module } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { PaymentInfoController } from './payment-info.controller';

@Module({
  controllers: [PaymentInfoController],
  providers: [PaymentInfoService]
})
export class PaymentInfoModule {}
