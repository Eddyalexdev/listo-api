import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CompanyType } from './types/companies.type';
import { EmployeeType } from 'src/employees/types/employees.type';
import { Company } from './entities/company.entity';

@Resolver(() => CompanyType)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Mutation(() => CompanyType)
  createCompany(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
    return this.companiesService.create(createCompanyInput);
  }

  @Query(() => [CompanyType], { name: 'companies' })
  findAll() {
    return this.companiesService.findAll();
  }

  @ResolveField(() => EmployeeType)
  employees(@Parent() company: Company) {
    return this.companiesService.findEmployeesByCompany(company.id)
  }

  @Query(() => CompanyType, { name: 'company' })
  findOne(@Args('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Mutation(() => CompanyType)
  updateCompany(@Args('id') id: string, @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput) {
    return this.companiesService.update(id, updateCompanyInput);
  }

  @Mutation(() => CompanyType)
  removeCompany(@Args('id') id: string) {
    return this.companiesService.remove(id);
  }
}
