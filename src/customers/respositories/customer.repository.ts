import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entity/customer.entity';

@Injectable()
export class CustomerRepository {
    constructor(
        @InjectRepository(Customer)
        private readonly repository: Repository<Customer>,
    ) {}

    create(customer: Partial<Customer>): Promise<Customer> {
        return this.repository.save(customer);
    }

    findAll(): Promise<Customer[]> {
        return this.repository.find();
    }

    findOne(id: number): Promise<Customer> {
        return this.repository.findOne({ where: { id } });
    }

    async update(id: number, customer: Partial<Customer>): Promise<Customer> {
        await this.repository.update(id, customer);
        return this.findOne(id);
    }

    delete(id: number): Promise<void> {
        return this.repository.delete(id).then(() => void 0);
    }
}