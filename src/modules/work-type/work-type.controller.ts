import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';
import { UpdateWorkTypeDto } from './dto/update-work-type.dto';
import { IWorkTypeController } from './interfaces/iworktype.controller';
import { SearchWorkTypesDto } from './dto/search-work-type.dto';
import { WorkType } from './entities/work-type.entity';

@Controller()
export class WorkTypeController implements IWorkTypeController {
  constructor(private readonly workTypeService: WorkTypeService) {}
  
  @Post("/work-type")
  @HttpCode(201)
  async createWorkType(@Body() createWorkTypeDto: CreateWorkTypeDto): Promise<void> {
    await this.workTypeService.createWorkType(createWorkTypeDto);
  }
  
  @Get("/work-types")
  @HttpCode(200)
  async searchWorkType(@Query() query: SearchWorkTypesDto): Promise<WorkType[]> {
    return await this.workTypeService.searchWorkType(query);
  }
  
  @Patch("/work-type/:worktypeId")
  @HttpCode(204)
  async updateWorkType(@Param("worktypeId") id: string, @Body() updateWorkTypeDto: UpdateWorkTypeDto): Promise<void> {
    await this.workTypeService.updateWorkType(id, updateWorkTypeDto);
  }
  
  @Delete("/work-type/:worktypeId")
  @HttpCode(204)
  async deleteWorkType(@Param("worktypeId") id: string): Promise<void> {
    await this.workTypeService.deleteWorkType(id);
  }

}
