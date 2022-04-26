import { CreatePaymentInfoDto } from "../dto/create-payment-info.dto";
import { UpdatePaymentInfoDto } from "../dto/update-payment-info.dto";
import { PaymentInfo } from "../entities/payment-info.entity";

export interface IPaymentInfoService {

    /**
     * POST request function to create a new payment in the database
     * 
     * @param vendorId - Request Param vendorId
     * @param contractId - Request Param contractId
     * @param createPyamentDto - Request Body validated by the CreatePyamentDto class
     */
     createPyament(vendorId: string, contractId: string, createPyamentDto: CreatePaymentInfoDto): Promise<void>;

     /**
      * GET request function to get many payment info associated to a given query
      * 
      * @param vendorId - Request Param vendorId
      * @param contractId - Request Param contractId
      */
     getAllPaymentInfo(vendorId: string, contractId: string): Promise<PaymentInfo[]>;
 
     /**
      * PATCH request function to update an existing payment info in the database
      * 
      * @param vendorId - Request Param vendorId
      * @param contractId - Request Param contractId
      * @param id - Request Param paymentId
      * @param updatePyamentDto - Request Body validated by the UpdatePyamentDto
      */
     updatePayment(vendorId: string, contractId: string, id: string, updatePyamentDto: UpdatePaymentInfoDto): Promise<void>;
 
     /**
      * DELETE request function to delete an existing payment info in the database
      * 
      * @param vendorId - Request Param vendorId
      * @param contractId - Request Param contractId
      * @param id - Request Param paymentId
      */
     deletePayment(vendorId: string, contractId: string, id: string): Promise<void>;
 
}