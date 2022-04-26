import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { Vendor } from './entities/vendor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkTypeService } from '../work-type/work-type.service';
import { WorkTypeModule } from '../work-type/work-type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vendor]),
    WorkTypeModule
  ],
  controllers: [VendorController],
  providers: [VendorService],
  exports: [VendorService]
})
export class VendorModule {}
