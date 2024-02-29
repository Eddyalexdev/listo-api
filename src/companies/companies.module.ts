import { Module, forwardRef } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [TypeOrmModule.forFeature([Company]), forwardRef(() => EmployeesModule)],
  providers: [CompaniesResolver, CompaniesService],
  exports: [CompaniesService]
})
export class CompaniesModule {}
