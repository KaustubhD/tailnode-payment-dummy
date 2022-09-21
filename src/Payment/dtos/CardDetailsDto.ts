import {
  IsCreditCard,
  IsDefined,
  IsNumberString,
  Length,
} from 'class-validator';
import { IsValidMonth } from '../../validator/IsValidMonthValidator';
import { CardNumberDto } from './CardNumberDto';

export class CardDetailsDto extends CardNumberDto {
  @IsDefined()
  @IsNumberString()
  @IsValidMonth('expirationMonth', {
    message: 'expirationMonth must be a valid month i.e. 1 to 12',
  })
  public expirationMonth!: string;

  @IsDefined()
  @IsNumberString()
  @Length(4)
  public expirationYear!: string;

  @IsDefined()
  @IsNumberString()
  @Length(3)
  public cvv!: string;
}
