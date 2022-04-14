import { Controller, Get, Post, Body, Patch, Param, BadRequestException, Query } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';

@Controller()
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post("/vendor")
  async createVendor(@Body() createVendorDto: CreateVendorDto) {
    const vendor = await this.vendorService.findVendorByName(createVendorDto.vendor_name);
    if (vendor) {
      throw new BadRequestException(`Bad Request, Vendor with the name ${createVendorDto.vendor_name} already exists.`);
    }
    return this.vendorService.createVendor(createVendorDto);
  }

  @Get("/vendors")
  async searchVendors(@Query() query: SearchVendorsDto) {
    return await this.vendorService.searchVendors(query);
  }

  @Patch('/vendor/:vendorId')
  updateVendor(@Param('vendorId') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorService.updateVendor(id, updateVendorDto);
  }

}
