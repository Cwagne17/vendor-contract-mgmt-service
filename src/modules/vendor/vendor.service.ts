import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorService {
  constructor(@InjectRepository(Vendor) private readonly vendorRepo: Repository<Vendor>) {}

  async createVendor(createVendorDto: CreateVendorDto): Promise<void> {
    await this.vendorRepo.save(createVendorDto);
  }

  async searchVendors(query: SearchVendorsDto): Promise<Vendor[]> {
    const vendors: Vendor[] = await this.vendorRepo.find();
    return vendors;
  }


  async findVendorByName(vendor_name: string): Promise<Vendor> {
    const vendor: Vendor[] = await this.vendorRepo.find({
      where: { vendor_name: vendor_name }
    });
    return vendor[0]
  }

  async updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void> {
    console.log(`update vendor ${id}, with ${updateVendorDto}`);
  }

}
