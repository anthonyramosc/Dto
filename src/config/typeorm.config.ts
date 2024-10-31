import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Customer } from '../customers/entity/customer.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'kala.db.elephantsql.com',
    port: 5432,
    username: 'qxpawzix',
    password: 'X18VnFxGy5l71M-MqaT6K5hyY_fpBjjV',
    database: 'qxpawzix',
    entities: [Customer],
    synchronize: false,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
};