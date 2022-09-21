import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { generateRandomAlphaNumString } from '../utils/RandomString';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const defaultFields = {
      time: new Date().toUTCString(),
      authorization_code: generateRandomAlphaNumString(),
    };

    return next.handle().pipe(map((data) => ({ ...data, ...defaultFields })));
  }
}
