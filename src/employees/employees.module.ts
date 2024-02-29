import { Module, forwardRef } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), forwardRef(() => CompaniesModule)],
  providers: [EmployeesResolver, EmployeesService],
  exports: [EmployeesService]
})
export class EmployeesModule {}
