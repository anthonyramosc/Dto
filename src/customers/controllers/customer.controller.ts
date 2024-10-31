import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CreateCustomerDto } from '../dto/create_customer.dto';
import { UpdateCustomerDto } from '../dto/update_customer.dto';
import { JSendInterceptor } from '../../common/interceptors/jsend.interceptor';

@Controller('customers')
@UseInterceptors(JSendInterceptor)
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customerService.create(createCustomerDto);
    }

    @Get()
    findAll() {
        return this.customerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customerService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.customerService.update(+id, updateCustomerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.customerService.remove(+id);
    }
}