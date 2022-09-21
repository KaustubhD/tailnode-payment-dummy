import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from '../interceptors/ResponseInterceptor';
import { PaymentDto } from './dtos/PaymentDto';
import { PaymentService } from './payment.service';

@Controller('/payments')
@UseInterceptors(TransformInterceptor)
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  public async addPayment(
    @Body() paymentDto: PaymentDto,
  ): Promise<PaymentResponse> {
    return this.paymentService.addPayment(paymentDto);
  }
}
