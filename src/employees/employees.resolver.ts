import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { EmployeeType } from './types/employees.type';
import { CompanyType } from 'src/companies/types/companies.type';

@Resolver(of => EmployeeType)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Mutation(() => EmployeeType)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeesService.create(createEmployeeInput);
  }

  @Query(() => [EmployeeType], { name: 'employees' })
  findAll() {
    return this.employeesService.findAll();
  }

  @ResolveField(() => CompanyType)
  company(@Parent() employee: EmployeeType) {
    return this.employeesService.findCompany(employee.companyId)
  }

  @Query(() => EmployeeType, { name: 'employee' })
  findOne(@Args('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Mutation(() => EmployeeType)
  updateEmployee(@Args('id') id: string, @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeesService.update(id, updateEmployeeInput);
  }

  @Mutation(() => EmployeeType)
  removeEmployee(@Args('id') id: string) {
    return this.employeesService.remove(id);
  }
}
