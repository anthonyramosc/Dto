import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface JSendResponse {
    status: 'success' | 'fail' | 'error';
    data?: any;
    message?: string;
}

@Injectable()
export class JSendInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<JSendResponse> {
        return next.handle().pipe(
            map(data => ({
                status: 'success',
                data: data
            }))
        );
    }
}