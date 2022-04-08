import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendorModule } from './modules/vendor/vendor.module';
import { ContractModule } from './modules/contract/contract.module';
import { WorkTypeModule } from './modules/work-type/work-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PaymentInfoModule } from './modules/payment-info/payment-info.module';

@Module({
  imports: [
    VendorModule,
    ContractModule,
    WorkTypeModule,
    PaymentInfoModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
