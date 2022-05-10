import { Controller, Get, Post, Body, Patch, Param, Query, HttpCode, NotFoundException } from '@nestjs/common';
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

  @Get("/vendor/:vendorName")
  @Roles(UserRole.ADMIN, UserRole.DIRECTOR)
  @HttpCode(200)
  async getVendorByName(@Param("vendorName") name: string): Promise<Vendor> {
    const vendor = await this.vendorService.findVendorByName(name);
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the name ${name} does not exist.`);
    }
    return vendor;
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
