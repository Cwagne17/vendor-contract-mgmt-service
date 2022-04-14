import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(@InjectRepository(Contract) private readonly contractRepo: Repository<Contract>) {}

  create() {
    return 'This action adds a new contract';
  }

  public async findAll() {
    return await this.contractRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
