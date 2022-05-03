import { Module } from '@nestjs/common';
import { VendorModule } from './modules/vendor/vendor.module';
import { ContractModule } from './modules/contract/contract.module';
import { WorkTypeModule } from './modules/work-type/work-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PaymentInfoModule } from './modules/payment-info/payment-info.module';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    VendorModule,
    ContractModule,
    WorkTypeModule,
    PaymentInfoModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
