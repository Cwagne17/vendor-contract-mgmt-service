import { Controller, Get, Post, Body, Patch, Param, Query, HttpCode } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';
import { Vendor } from './entities/vendor.entity';
import { IVendorController } from './interfaces/ivendor.controller';
import { Roles, UserRole } from '../auth/roles.decorator';

@Controller()
export class VendorController implements IVendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post("/vendor")
  @Roles(UserRole.ADMIN)
  @HttpCode(201)
  async createVendor(@Body() createVendorDto: CreateVendorDto): Promise<void> {
    await this.vendorService.createVendor(createVendorDto);
  }

  @Get("/vendor/:vendorId")
  @Roles(UserRole.ADMIN, UserRole.DIRECTOR)
  @HttpCode(200)
  async getVendor(@Param("vendorId") id: string): Promise<Vendor> {
    return await this.vendorService.findVendorById(id);
  }

  @Get("/vendors")
  @Roles(UserRole.ADMIN, UserRole.DIRECTOR)
  @HttpCode(200)
  async searchVendors(@Query() query): Promise<Vendor[]> {
    return await this.vendorService.searchVendors(new SearchVendorsDto(query));
  }

  @Patch('/vendor/:vendorId')
  @Roles(UserRole.ADMIN)
  @HttpCode(204)
  async updateVendor(@Param('vendorId') id: string, @Body() updateVendorDto: UpdateVendorDto): Promise<void> {
    await this.vendorService.updateVendor(id, updateVendorDto);
  }

}
