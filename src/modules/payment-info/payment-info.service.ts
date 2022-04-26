import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractService } from '../contract/contract.service';
import { VendorService } from '../vendor/vendor.service';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';
import { PaymentInfo } from './entities/payment-info.entity';
import { IPaymentInfoService } from './interfaces/ipayment-info.service';

@Injectable()
export class PaymentInfoService implements IPaymentInfoService {
  constructor(
    @InjectRepository(PaymentInfo) private readonly paymentRepo: Repository<PaymentInfo>,
    private readonly vendorService: VendorService,
    private readonly contractService: ContractService
  ) {}

  async createPyament(vendorId: string, contractId: string, createPyamentDto: CreatePaymentInfoDto): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) { 
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    const contract = await this.contractService.findContractById(contractId);
    if (!contract) {
      throw new NotFoundException(`Not Found, the contract with the id ${contractId}, does not exist.`);
    }
    const payment_info = await this.findPaymentByCheckNumber(createPyamentDto.check_number);
    if (payment_info) {
      throw new BadRequestException(`Bad Request, payment info with the check number ${createPyamentDto.check_number}, already exists.`);
    }
    const payment_entity = await this.paymentRepo.create({
      ...createPyamentDto, 
      contract: contract
    });
    await this.paymentRepo.save(payment_entity);
  }
  
  async getAllPaymentInfo(vendorId: string, contractId: string): Promise<PaymentInfo[]> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) { 
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    const contract = await this.contractService.findContractById(contractId);
    if (!contract) {
      throw new NotFoundException(`Not Found, the contract with the id ${contractId}, does not exist.`);
    }
    return await this.paymentRepo.find({
      relations: ["contract"],
      where: {
        contract: {
          id: contractId
        }
      } 
    });
  }
  
  async updatePayment(vendorId: string, contractId: string, id: string, updatePyamentDto: UpdatePaymentInfoDto): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) { 
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    const contract = await this.contractService.findContractById(contractId);
    if (!contract) {
      throw new NotFoundException(`Not Found, the contract with the id ${contractId}, does not exist.`);
    }
    const payment_info = await this.findPaymentByCheckNumber(id);
    if (!payment_info) {
      throw new NotFoundException(`Not Found, payment info with the id ${id}, does not exist.`);
    }
    await this.paymentRepo.update(id, updatePyamentDto);
  }

  async deletePayment(vendorId: string, contractId: string, id: string): Promise<void> {
    const vendor = await this.vendorService.findVendorById(vendorId);
    if (!vendor) { 
      throw new NotFoundException(`Not Found, the vendor with the id ${vendorId}, does not exist.`);
    }
    const contract = await this.contractService.findContractById(contractId);
    if (!contract) {
      throw new NotFoundException(`Not Found, the contract with the id ${contractId}, does not exist.`);
    }
    const payment_info = await this.findPaymentByCheckNumber(id);
    if (!payment_info) {
      throw new NotFoundException(`Not Found, payment info with the id ${id}, does not exist.`);
    }
    await this.paymentRepo.delete(id);
  }

  async findPaymentById(id: string): Promise<PaymentInfo> {
    return await this.paymentRepo.findOne({
      relations: ["contract"],
      where: {
        id: id
      }
    });
  }

  async findPaymentByCheckNumber(check_number: string): Promise<PaymentInfo> {
    return await this.paymentRepo.findOne({
      relations: ["contract"],
      where: {
        check_number: check_number
      }
    });
  }

}
