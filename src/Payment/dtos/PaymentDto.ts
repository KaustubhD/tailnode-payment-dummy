import {
  IsDefined,
  IsEnum,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CardType } from '../enums/CardType';
import { Currency } from '../enums/Currency';
import { Type } from 'class-transformer';
import { CardDetailsDto } from './CardDetailsDto';

export class PaymentDto {
  @IsDefined()
  @IsNumberString()
  public amount!: string;

  @IsDefined()
  @IsEnum(Currency, {
    message: 'Currency must be a valid ISO 4217 currency code',
  })
  public currency!: Currency;

  @IsDefined()
  @IsEnum(CardType, { message: 'Type can be either creditcard or debitcard' })
  public type!: CardType;

  @IsDefined()
  @ValidateNested()
  @Type(() => CardDetailsDto)
  public card!: CardDetailsDto;
}
