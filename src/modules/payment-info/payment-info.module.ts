import { Module } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { PaymentInfoController } from './payment-info.controller';
import { PaymentInfo } from './entities/payment-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractModule } from '../contract/contract.module';
import { VendorModule } from '../vendor/vendor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentInfo]),
    ContractModule,
    VendorModule
  ],
  controllers: [PaymentInfoController],
  providers: [PaymentInfoService]
})
export class PaymentInfoModule {}
