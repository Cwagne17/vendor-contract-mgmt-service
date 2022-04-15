import { CreateVendorDto } from "src/modules/vendor/dto/create-vendor.dto";
import { SearchVendorsDto } from "src/modules/vendor/dto/search-vendors.dto";
import { UpdateVendorDto } from "src/modules/vendor/dto/update-vendor.dto";
import { Vendor } from "src/modules/vendor/entities/vendor.entity";
import { IVendorService } from "../../src/modules/vendor/interfaces/ivendor.service";

export class VendorServiceMock implements IVendorService {
    
    async createVendor(createVendorDto: CreateVendorDto): Promise<void> {
        console.log("created vendor!");
    }

    async searchVendors(query: SearchVendorsDto): Promise<Vendor[]> {
        return [];
    }

    async findVendorByName(vendor_name: string): Promise<Vendor> {
        return null;
    }
    
    async findVendorById(id: string): Promise<Vendor> {
        return null;
    }

    async updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void> {
        console.log("Updated vendor");
    }

}