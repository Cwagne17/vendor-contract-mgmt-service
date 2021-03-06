import { CreateContractDto } from "../dto/create-contract.dto";
import { SearchContractsDto } from "../dto/search-contract.dto";
import { UpdateContractDto } from "../dto/update-contract.dto";
import { Contract } from "../entities/contract.entity";

export interface IContractController {

    /**
     * POST request function to create a new contract in the database
     * 
     * @param vendorId - Request Param vendorId
     * @param createContractDto - Request Body validated by the CreateContractDto class
     */
    createContract(vendorId: string, createContractDto: CreateContractDto): Promise<void>;

    /**
     * GET request function to get many contracts associated to a given query
     * 
     * @param query - Request Query validated by the SearchVendorsDto class
     */
    searchContracts(query: SearchContractsDto): Promise<Contract[]>;

    /**
     * PATCH request function to update an existing contract in the database
     * 
     * @param vendorId - Request Param vendorId
     * @param id - Request Param contractId
     * @param updateContractDto - Request Body validated by the UpdateContractDto
     */
    updateContract(vendorId: string, id: string, updateContractDto: UpdateContractDto): Promise<void>;

    /**
     * DELETE request function to delete an existing contract in the database
     * 
     * @param vendorId - Request Param vendorId
     * @param id - Request Param contractId
     */
    deleteContract(vendorId: string, id: string): Promise<void>;

}