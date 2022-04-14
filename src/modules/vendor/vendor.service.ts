import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorService {
  constructor(@InjectRepository(Vendor) private readonly vendorRepo: Repository<Vendor>) {}

  async createVendor(createVendorDto: CreateVendorDto): Promise<void> {
    await this.vendorRepo.create(createVendorDto);
  }

  async searchVendors(query: SearchVendorsDto): Promise<Vendor[]> {
    return await this.vendorRepo.find({
      where: {
        vendor_name: ILike(query.text),
        status: In(query.status),
        type: In(query.work_type)
      },
      order: {
        vendor_name: query.sort,
      }
    });
  }


  async findVendorByName(vendor_name: string): Promise<Vendor> {
    return await this.vendorRepo.findOne({
      where: { vendor_name: vendor_name }
    });
  }

  async updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void> {
    await this.vendorRepo.update(id, updateVendorDto);
  }

}
