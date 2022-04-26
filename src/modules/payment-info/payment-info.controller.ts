import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';
import { IPaymentInfoController } from './interfaces/ipayment-info.controller';
import { PaymentInfo } from './entities/payment-info.entity';

@Controller()
export class PaymentInfoController implements IPaymentInfoController{
  constructor(private readonly paymentInfoService: PaymentInfoService) {}
  
  @Post("/vendor/:vendorId/contract/:contractId/payment")
  @HttpCode(201)
  async createPyament(@Param("vendorId") vendorId: string, @Param("contractId") contractId: string, @Body() createPyamentDto: CreatePaymentInfoDto): Promise<void> {
    await this.paymentInfoService.createPyament(vendorId, contractId, createPyamentDto);
  }
  
  @Get("/vendor/:vendorId/contract/:contractId/payments")
  @HttpCode(200)
  async getAllPaymentInfo(@Param("vendorId") vendorId: string, @Param("contractId") contractId: string): Promise<PaymentInfo[]> {
    return await this.paymentInfoService.getAllPaymentInfo(vendorId, contractId);
  }
  
  @Patch("/vendor/:vendorId/contract/:contractId/payment/:paymentId")
  @HttpCode(204)
  async updatePayment(@Param("vendorId") vendorId: string, @Param("contractId") contractId: string, @Param("paymentId") id: string, @Body() updatePyamentDto: UpdatePaymentInfoDto): Promise<void> {
    await this.paymentInfoService.updatePayment(vendorId, contractId, id, updatePyamentDto);
  }
  
  @Delete("/vendor/:vendorId/contract/:contractId/payment/:paymentId")
  @HttpCode(204)
  async deletePayment(@Param("vendorId") vendorId: string, @Param("contractId") contractId: string, @Param("paymentId") id: string): Promise<void> {
    await this.paymentInfoService.deletePayment(vendorId, contractId, id);
  }

}
