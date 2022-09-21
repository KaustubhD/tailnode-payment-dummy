import { CardType } from '../enums/CardType';
import { Currency } from '../enums/Currency';
import { CardNumberDto } from './CardNumberDto';
import { PaymentDto } from './PaymentDto';

export class PaymentResponseDto {
  public amount!: string;

  public currency!: Currency;

  public type!: CardType;

  public card!: CardNumberDto;

  public constructor(postPaymentDto: PaymentDto) {
    this.amount = postPaymentDto.amount;
    this.currency = postPaymentDto.currency;
    this.type = postPaymentDto.type;
    this.card = new CardNumberDto(postPaymentDto.card.number);
  }
}
