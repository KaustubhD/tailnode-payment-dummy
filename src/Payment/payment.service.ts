import { Injectable } from '@nestjs/common';
import { PaymentDto } from './dtos/PaymentDto';
import { PaymentResponseDto } from './dtos/PaymentResponseDto';

@Injectable()
export class PaymentService {
  public async addPayment(paymentDto: PaymentDto): Promise<any> {
    // save to db

    return new PaymentResponseDto(paymentDto);
  }
}
