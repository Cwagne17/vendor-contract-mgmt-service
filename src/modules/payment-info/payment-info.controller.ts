import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';

@Controller('payment-info')
export class PaymentInfoController {
  constructor(private readonly paymentInfoService: PaymentInfoService) {}

  @Post()
  create(@Body() createPaymentInfoDto: CreatePaymentInfoDto) {
    return this.paymentInfoService.create();
  }

  @Get()
  findAll() {
    return this.paymentInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentInfoDto: UpdatePaymentInfoDto) {
    return this.paymentInfoService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentInfoService.remove(+id);
  }
}
