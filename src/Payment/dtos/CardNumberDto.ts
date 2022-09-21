import { IsCreditCard, IsDefined } from 'class-validator';

export class CardNumberDto {
  @IsDefined()
  @IsCreditCard()
  public number!: string;

  public constructor(number: string) {
    this.number = number;
  }
}
