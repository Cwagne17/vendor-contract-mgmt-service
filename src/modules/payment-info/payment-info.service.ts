import { Injectable } from '@nestjs/common';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';

@Injectable()
export class PaymentInfoService {
  create() {
    return 'This action adds a new paymentInfo';
  }

  findAll() {
    return `This action returns all paymentInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentInfo`;
  }

  update(id: number) {
    return `This action updates a #${id} paymentInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentInfo`;
  }
}
