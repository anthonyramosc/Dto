import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerRepository } from '../respositories/customer.repository';
import { CreateCustomerDto } from '../dto/create_customer.dto';
import { UpdateCustomerDto } from '../dto/update_customer.dto';
import { Customer } from '../entity/customer.entity';

@Injectable()
export class CustomerService {
    constructor(private readonly customerRepository: CustomerRepository) {}

    create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customerRepository.create(createCustomerDto);
    }

    findAll(): Promise<Customer[]> {
        return this.customerRepository.findAll();
    }

    async findOne(id: number): Promise<Customer> {
        const customer = await this.customerRepository.findOne(id);
        if (!customer) {
            throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return customer;
    }

    async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
        await this.findOne(id); // Verify existence
        return this.customerRepository.update(id, updateCustomerDto);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id); // Verify existence
        return this.customerRepository.delete(id);
    }
}