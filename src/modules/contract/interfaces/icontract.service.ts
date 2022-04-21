import { CreateContractDto } from "../dto/create-contract.dto";
import { SearchContractDto } from "../dto/search-contract.dto";
import { UpdateContractDto } from "../dto/update-contract.dto";
import { Contract } from "../entities/contract.entity";

export interface IContractService {

    /**
     * Function creates a new contract in the database
     * 
     * @param vendorId - Request Param vendorId
     * @param createContractDto - Request Body validated by the CreateContractDto class
     */
     createContract(vendorId: string, createContractDto: CreateContractDto): Promise<void>;

     /**
      * Function to get many contracts associated to a given query
      * 
      * @param query - Request Query validated by the SearchVendorsDto class
      */
     searchContracts(query: SearchContractDto): Promise<Contract[]>;
 
     /**
      * Function to update an existing contract in the database
      * 
      * @param vendorId - Request Param vendorId
      * @param id - Request Param contractId
      * @param updateContractDto - Request Body validated by the UpdateContractDto
      */
     updateContract(vendorId: string, id: string, updateContractDto: UpdateContractDto): Promise<void>;
 
     /**
      * Function to delete an existing contract in the database
      * 
      * @param vendorId - Request Param vendorId
      * @param id - Request Param contractId
      */
     deleteContract(vendorId: string, id: string): Promise<void>;
 
     /**
      * Function to download an existing contract storing its PDF in S3
      * 
      * @param vendorId - Request Param vendorId
      * @param id - Request Param contractId
      */
     downloadContract(vendorId: string, id: string): Promise<void>;
    
     /**
      * Function to find a vendor's contract on a given date
      * 
      * @param vendorId - Request Param vendorId
      * @param date - date a contract was created
      */
     findVendorContractByDate(vendorId: string, date: Date): Promise<Contract>
}