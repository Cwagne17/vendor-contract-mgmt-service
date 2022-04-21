import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { StatusTypes } from '../vendor/entities/vendor.entity';
import { VendorService } from '../vendor/vendor.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { SearchContractDto } from './dto/search-contract.dto';
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
    await this.contractRepo.create({ ...createContractDto, work_id: vendor.work_id });
    await this.vendorService.updateVendorStatus(vendorId, StatusTypes.IN_CONTRACT);
  }
  
  // This function is broken
  // Needs to join the contract table with the vendor and work type table
  async searchContracts(query: SearchContractDto): Promise<Contract[]> {
    return await this.contractRepo.find({
      where: {
        vendor_name: ILike(query.text),
        type: In(query.work_type)
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
      where: { 
        vendor_id: vendorId, 
        contract_date: date
      }
    });
  }

}
