import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorService {
  constructor(@InjectRepository(Vendor) private readonly vendorRepo: Repository<Vendor>) {}

  createVendor(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  findAllVendors() {
    return this.vendorRepo.find();
  }

  findOneVendor(id: number) {
    return `This action returns a #${id} vendor`;
  }

  updateVendor(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  removeVendor(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
