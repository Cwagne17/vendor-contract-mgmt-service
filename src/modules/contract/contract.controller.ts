import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { SearchContractDto } from './dto/search-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
import { IContractController } from './interfaces/icontract.controller';

@Controller()
export class ContractController implements IContractController {
  constructor(private readonly contractService: ContractService) {}
  
  @Post("/vendor/:vendorId/contract")
  async createContract(@Param("vendorId") vendorId: string, @Body() createContractDto: CreateContractDto): Promise<void> {
    await this.contractService.createContract(vendorId, createContractDto);
  }

  @Get("/contracts")
  async searchContracts(@Query() query: SearchContractDto): Promise<Contract[]> {
    return await this.contractService.searchContracts(query);
  }

  @Patch("/vendor/:vendorId/contract/:contractId")
  async updateContract(@Param("vendorId") vendorId: string, @Param("contractId") id: string, @Body() updateContractDto: UpdateContractDto): Promise<void> {
    await this.contractService.updateContract(vendorId, id, updateContractDto);
  }

  @Delete("/vendor/:vendorId/contract/:contractId")
  async deleteContract(@Param("vendorId") vendorId: string, @Param("contractId") id: string): Promise<void> {
    await this.contractService.deleteContract(vendorId, id);
  }

  @Get("/vendor/:vendorId/contract/:contractId/download")
  async downloadContract(@Param("vendorId") vendorId: string, @Param("contractId") id: string): Promise<void> {
    await this.contractService.downloadContract(vendorId, id);
  }

}
