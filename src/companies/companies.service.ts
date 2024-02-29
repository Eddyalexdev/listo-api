import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid' 
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class CompaniesService {
  constructor(@InjectRepository(Company) 
    private companiesRepository: Repository<Company>,
    @Inject(forwardRef(() => EmployeesService))
    private employeesService: EmployeesService
  ){}

  async create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const data = this.companiesRepository.create({
      id: uuid(),
      ...createCompanyInput
    })

    return this.companiesRepository.save(data)
  }

  async findAll(): Promise<Company[]> {
    return this.companiesRepository.find()
  }

  async findOne(id: string): Promise<Company> {
    return this.companiesRepository.findOne({where: {id}})
  }

  async update(id: string, updateCompanyInput: UpdateCompanyInput) {
    let data = await this.companiesRepository.findOne({where: {id}})
    if (!data) throw new Error('No existe esa empresa')
    data = {...data, ...updateCompanyInput}
    await this.companiesRepository.save(data)
    return data
  }

  async remove(id: string) {
    const data = await this.companiesRepository.findOne({where: {id}})
    if (!data) throw new Error("No existe esa empresa")
    await this.companiesRepository.remove(data)
    return data
  }

  async findEmployees(): Promise<Employee[]> {
    return this.employeesService.findAll()
  }

  async findEmployeesByCompany(id: string) {
    return this.employeesService.findEmployeesByCompany(id)
  }
}
