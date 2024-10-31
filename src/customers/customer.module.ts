import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './service/customer.service';
import { CustomerRepository } from './respositories/customer.repository';
import { Customer } from './entity/customer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [CustomerController],
    providers: [CustomerService, CustomerRepository],
    exports: [CustomerService],
})
export class CustomerModule {}