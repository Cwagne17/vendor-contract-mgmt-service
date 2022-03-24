import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {
  createVendor(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  findAllVendors() {
    return `This action returns all vendor`;
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
