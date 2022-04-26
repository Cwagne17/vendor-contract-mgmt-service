import { Module } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { WorkTypeController } from './work-type.controller';
import { WorkType } from './entities/work-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkType])
  ],
  controllers: [WorkTypeController],
  providers: [WorkTypeService],
  exports: [WorkTypeService]
})
export class WorkTypeModule {}
