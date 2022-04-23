import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Like, Repository } from 'typeorm';
import { WorkTypeService } from '../work-type/work-type.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { SearchVendorsDto } from './dto/search-vendors.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { StatusTypes, Vendor } from './entities/vendor.entity';
import { IVendorService } from './interfaces/ivendor.service';

@Injectable()
export class VendorService implements IVendorService {
  constructor(
    @InjectRepository(Vendor) private readonly vendorRepo: Repository<Vendor>,
    private readonly workTypeService: WorkTypeService  
  ) {}

  async createVendor(createVendorDto: CreateVendorDto): Promise<void> {
    const vendor = await this.findVendorByName(createVendorDto.vendor_name);
    if (vendor) {
      throw new BadRequestException(`Bad Request, Vendor with the name ${createVendorDto.vendor_name} already exists.`);
    }
    const workType = await this.workTypeService.findWorkTypeById(createVendorDto.work_id);
    if (!workType) {
      throw new NotFoundException(`Not Found, the work type with the id ${createVendorDto.work_id}, does not exist.`);
    }
    const vendor_entity = await this.vendorRepo.create({
      ...createVendorDto,
      workType: workType
    });
    await this.vendorRepo.save(vendor_entity);
  }

  async searchVendors(query: SearchVendorsDto): Promise<Vendor[]> {
    const status = query.status ? { status: In(query.status) } : {};
    const workType = query.work_type ? { workType: { type: In(query.work_type) } } : {};

    return await this.vendorRepo.find({
      relations: ["workType"],
      where: {
        vendor_name: Like(`%${query.text}%`),
        ...status,
        ...workType
      },
      order: {
        vendor_name: query.sort,
      }
    });
  }

  async updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void> {
    const vendor = await this.findVendorById(id);
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the id ${id}, does not exist.`);
    }
    await this.vendorRepo.update(id, updateVendorDto);
  }

  async findVendorByName(vendor_name: string): Promise<Vendor> {
    return await this.vendorRepo.findOne({
      where: { vendor_name: vendor_name }
    });
  }

  async findVendorById(id: string): Promise<Vendor> {
    return await this.vendorRepo.findOne({
      where: { id: id }
    });
  }

  async updateVendorStatus(id: string, status: StatusTypes): Promise<void> {
    const vendor = await this.findVendorById(id); 
    if (!vendor) {
      throw new NotFoundException(`Not Found, the vendor with the id ${id}, does not exist.`);
    }
    await this.vendorRepo.update(id, { status: status });
  }

}
