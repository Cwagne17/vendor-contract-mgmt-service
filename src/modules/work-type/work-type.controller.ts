import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';
import { UpdateWorkTypeDto } from './dto/update-work-type.dto';

@Controller()
export class WorkTypeController {
  constructor(private readonly workTypeService: WorkTypeService) {}

  @Get('/work-type')
  getWorkTypes() {
    return "not yet impletmented";
  }

  @Post('/work-type')
  createWorkType() {
    return "not yet implemented";
  }

  @Patch('/work-type/:workId')
  updateWorkType(@Param('workId') workId: string, @Body() updateWorkTypeDto: UpdateWorkTypeDto) {
    return {workId,updateWorkTypeDto};
  }

  @Delete('/work-type/:workId')
  deleteWorkType(@Param('workId') workId: string) {
    return workId;
  }
}
