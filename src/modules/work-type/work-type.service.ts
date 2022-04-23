import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';
import { SearchWorkTypesDto } from './dto/search-work-type.dto';
import { UpdateWorkTypeDto } from './dto/update-work-type.dto';
import { WorkType } from './entities/work-type.entity';
import { IWorkTypeService } from './interfaces/iworktype.service';

@Injectable()
export class WorkTypeService implements IWorkTypeService {
  constructor(@InjectRepository(WorkType) private readonly worktypeRepo: Repository<WorkType>) {}

  async createWorkType(createWorkTypeDto: CreateWorkTypeDto): Promise<void> {
    const workType = await this.findWorkTypeByType(createWorkTypeDto.type);
    if (workType) {
      throw new BadRequestException(`Bad Request, Work type with the type ${createWorkTypeDto.type} already exists.`);
    }
    const worktype_entity = await this.worktypeRepo.create(createWorkTypeDto);
    await this.worktypeRepo.save(worktype_entity);
  }
  
  async searchWorkType(query: SearchWorkTypesDto): Promise<WorkType[]> {
    return await this.worktypeRepo.find({
      where: {
        type: Like(`%${query.text}%`)
      }
    });
  }
  
  async updateWorkType(id: string, updateWorkTypeDto: UpdateWorkTypeDto): Promise<void> {
    const workType = await this.findWorkTypeById(id);
    if (!workType) {
      throw new NotFoundException(`Not Found, the work type with the id ${id}, does not exist.`);
    }
    await this.worktypeRepo.update(id, updateWorkTypeDto);
  }
  
  async deleteWorkType(id: string): Promise<void> {
    const workType = await this.findWorkTypeById(id);
    if (!workType) {
      throw new NotFoundException(`Not Found, the work type with the id ${id}, does not exist.`);
    }
    await this.worktypeRepo.delete(id);
  }

  async findWorkTypeByType(type: string): Promise<WorkType> {
    return await this.worktypeRepo.findOne({ where: { type: type } });
  }

  async findWorkTypeById(id: string): Promise<WorkType> {
    return await this.worktypeRepo.findOne({ where: { id: id } });
  }
 
}
