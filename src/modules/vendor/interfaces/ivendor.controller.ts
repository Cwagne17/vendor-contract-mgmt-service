import { CreateVendorDto } from "../dto/create-vendor.dto";
import { SearchVendorsDto } from "../dto/search-vendors.dto";
import { UpdateVendorDto } from "../dto/update-vendor.dto";
import { Vendor } from "../entities/vendor.entity";

export interface IVendorController {

    /**
     * POST request function to create a new vendor in the database
     * 
     * @param createVendorDto - Request Body validated by the CreateVendorDto class
     */
    createVendor(createVendorDto: CreateVendorDto): Promise<void>;

    getVendor(id: string): Promise<Vendor>;

    /**
     * GET request function to get many vendors associated to a given query
     * 
     * @param query - Request Query validated by the SearchVendorsDto class
     */
    searchVendors(query: SearchVendorsDto): Promise<Vendor[]>;

    /**
     * PATCH request function to update an existing vendor in the database
     * 
     * @param id - Request Param vendorId
     * @param updateVendorDto - Request Body validated by the UpdateVendorDto
     */
    updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void>;

}