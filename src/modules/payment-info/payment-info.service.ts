import { Injectable } from '@nestjs/common';

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
