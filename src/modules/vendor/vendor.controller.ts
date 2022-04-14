import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';
import { Vendor } from './entities/vendor.entity';
import { IVendorController } from './interfaces/ivendor.controller';

@Controller()
export class VendorController implements IVendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post("/vendor")
  async createVendor(@Body() createVendorDto: CreateVendorDto): Promise<void> {
    await this.vendorService.createVendor(createVendorDto);
  }

  @Get("/vendors")
  async searchVendors(@Query() query: SearchVendorsDto): Promise<Vendor[]> {
    return await this.vendorService.searchVendors(query);
  }

  @Patch('/vendor/:vendorId')
  async updateVendor(@Param('vendorId') id: string, @Body() updateVendorDto: UpdateVendorDto): Promise<void> {
    await this.vendorService.updateVendor(id, updateVendorDto);
  }

}
