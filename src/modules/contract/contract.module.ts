import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from './entities/contract.entity';
import { VendorModule } from '../vendor/vendor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contract]),
    VendorModule
  ],
  controllers: [ContractController],
  providers: [ContractService],
  exports: [ContractService]
})
export class ContractModule {}
