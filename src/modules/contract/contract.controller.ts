import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { Roles, UserRole } from '../auth/roles.decorator';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { SearchContractsDto } from './dto/search-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
import { IContractController } from './interfaces/icontract.controller';

@Controller()
export class ContractController implements IContractController {
  constructor(private readonly contractService: ContractService) {}
  
  @Post("/vendor/:vendorId/contract")
  //@Roles(UserRole.DIRECTOR)
  @HttpCode(201)
  async createContract(@Param("vendorId") vendorId: string, @Body() createContractDto: CreateContractDto): Promise<void> {
    await this.contractService.createContract(vendorId, createContractDto);
  }

  @Get("/contracts")
  //@Roles(UserRole.ADMIN, UserRole.DIRECTOR)
  @HttpCode(200)
  async searchContracts(@Query() query): Promise<Contract[]> {
    return await this.contractService.searchContracts(new SearchContractsDto(query));
  }

  @Patch("/vendor/:vendorId/contract/:contractId")
  //@Roles(UserRole.DIRECTOR)
  @HttpCode(204)
  async updateContract(@Param("vendorId") vendorId: string, @Param("contractId") id: string, @Body() updateContractDto: UpdateContractDto): Promise<void> {
    await this.contractService.updateContract(vendorId, id, updateContractDto);
  }

  @Delete("/vendor/:vendorId/contract/:contractId")
  //@Roles(UserRole.DIRECTOR)
  @HttpCode(204)
  async deleteContract(@Param("vendorId") vendorId: string, @Param("contractId") id: string): Promise<void> {
    await this.contractService.deleteContract(vendorId, id);
  }

}
