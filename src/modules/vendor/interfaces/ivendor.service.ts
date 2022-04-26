import { CreateVendorDto } from "../dto/create-vendor.dto";
import { SearchVendorsDto } from "../dto/search-vendors.dto";
import { UpdateVendorDto } from "../dto/update-vendor.dto";
import { Vendor } from "../entities/vendor.entity";

export interface IVendorService {

    /**
     * Function creates a new vendor in the database
     * 
     * @param createVendorDto - Request Body validated by the CreateVendorDto class
     */
    createVendor(createVendorDto: CreateVendorDto): Promise<void>;

    /**
     * Function finds all vendors related to a given a query
     * 
     * @param query - Request Query validated by the SearchVendorsDto class
     */
    searchVendors(query: SearchVendorsDto): Promise<Vendor[]>;

    /**
     * Function finds a vendor by name
     * 
     * @param vendor_name 
     */
    findVendorByName(vendor_name: string): Promise<Vendor>;
   
    /**
     * Function finds a vendor by a uuid
     * 
     * @param id 
     */
    findVendorById(id: string): Promise<Vendor>;

    /**
     * Function updates vendor attributes
     * 
     * @param id - Request Param vendorId
     * @param updateVendorDto - Request Body validated by the UpdateVendorDto
     * @throws HTTP
     */
    updateVendor(id: string, updateVendorDto: UpdateVendorDto): Promise<void>;

}