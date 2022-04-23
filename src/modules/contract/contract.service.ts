import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Like, Repository } from 'typeorm';
import { StatusTypes } from '../vendor/entities/vendor.entity';
import { VendorService } from '../vendor/vendor.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { SearchContractsDto } from './dto/search-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
import { IContractService } from './interfaces/icontract.service';

@Injectable()
export class ContractService implements IContractService{
  constructor(
    @InjectRepository(Contract) private readonly contractRepo: Repository<Contract>,
    private vendorService: VendorService
  ) {}
  
  async createContract(vendorId: string, createContractDto: CreateContractDto): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    if (vendor.status !== StatusTypes.ACTIVE) {
      throw new BadRequestException(`Bad Request, the vendor a contract is being made for is not in an Active status.`);
    }
    const contract = await this.findVendorContractByDate(vendorId, createContractDto.contract_date);
    if (contract) {
      throw new BadRequestException(`Bad Request, the Vendor has a contract already for the date ${createContractDto.contract_date}.`);
    }
    if (createContractDto.contract_end_date < createContractDto.contract_date) {
      throw new BadRequestException(`Bad Request, the contract end date must be after the start date.`);
    }
    if (!vendor.workType) {
      throw new InternalServerErrorException(`Relational Issue, Work Type was not returned with the vendor, contact an IT admin.`);
    }
    const contract_entity = await this.contractRepo.create({ 
      ...createContractDto,
      vendor: vendor,
      workType: vendor.workType 
    });
    await this.contractRepo.save(contract_entity);
    await this.vendorService.updateVendorStatus(vendorId, StatusTypes.IN_CONTRACT);
  }
  
  async searchContracts(query: SearchContractsDto): Promise<Contract[]> {
    const workTypeQuery = query.work_type ? { workType: { type: In(query.work_type) } } : {};

    return await this.contractRepo.find({
      relations: ["vendor", "workType"],
      where: {
        vendor: {
          vendor_name: Like(`%${query.text}%`)
        },
        ...workTypeQuery
      },
      order: {
        contract_date: query.sort,
      }
    });
  }

  async updateContract(vendorId: string, id: string, updateContractDto: UpdateContractDto): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    await this.contractRepo.update(id, updateContractDto);
  }

  async deleteContract(vendorId: string, id: string): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    await this.contractRepo.delete(id);
  }

  async downloadContract(vendorId: string, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findVendorContractByDate(vendorId: string, date: Date): Promise<Contract> {
    return await this.contractRepo.findOne({
      relations: ["vendor", "workType"],
      where: { 
        contract_date: date,
        vendor: {
          id: vendorId
        }
      }
    });
  }

}
