import { Controller, Get, Post, Body, Patch, Param, Query, HttpCode } from '@nestjs/common';
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
  @HttpCode(201)
  async createVendor(@Body() createVendorDto: CreateVendorDto): Promise<void> {
    await this.vendorService.createVendor(createVendorDto);
  }

  @Get("/vendors")
  @HttpCode(200)
  async searchVendors(@Query() query): Promise<Vendor[]> {
    return await this.vendorService.searchVendors(new SearchVendorsDto(query));
  }

  @Patch('/vendor/:vendorId')
  @HttpCode(204)
  async updateVendor(@Param('vendorId') id: string, @Body() updateVendorDto: UpdateVendorDto): Promise<void> {
    console.log(updateVendorDto);
    await this.vendorService.updateVendor(id, updateVendorDto);
  }

}
