import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkTypeService {
  create() {
    return 'This action adds a new workType';
  }

  findAll() {
    return `This action returns all workType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workType`;
  }

  update(id: string) {
    return `This action updates a #${id} workType`;
  }

  remove(id: number) {
    return `This action removes a #${id} workType`;
  }
}
