import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';
import { UpdateWorkTypeDto } from './dto/update-work-type.dto';

@Controller('work-type')
export class WorkTypeController {
  constructor(private readonly workTypeService: WorkTypeService) {}

  @Post()
  create() {
    return this.workTypeService.create();
  }

  @Get()
  findAll() {
    return this.workTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.workTypeService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workTypeService.remove(+id);
  }
}
