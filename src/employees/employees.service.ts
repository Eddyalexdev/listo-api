import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Employee } from './entities/employee.entity';
import {  In, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { CompaniesService } from 'src/companies/companies.service';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) 
    private employeesRepository: Repository<Employee>,
    @Inject(forwardRef(() => CompaniesService))
    private companiesService: CompaniesService
  ){}

  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    const data = this.employeesRepository.create({
      id: uuid(),
      ...createEmployeeInput
    })
    return this.employeesRepository.save(data)
  }

  async findAll(): Promise<Employee[]> {
    return this.employeesRepository.find()
  }

  async findOne(id: string): Promise<Employee> {
    const data = await this.employeesRepository.findOne({where: {id}}) 
    if (!data) throw new Error('Empleado no encontrado')
    return data
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    let data = await this.employeesRepository.findOne({where: {id}})
    if (!data) throw new Error('Empleado no encontrado')
    data = {...data, ...updateEmployeeInput}
    await this.employeesRepository.save(data)
    return data
  }

  async remove(id: string): Promise<Employee> {
    const data = await this.employeesRepository.findOne({where: {id}})
    if (!data) throw new Error('Empleado no encontrado')
    await this.employeesRepository.remove(data)
    return data
  }

  async findCompany(id: string): Promise<Company> {
    return this.companiesService.findOne(id)
  }

  async findEmployeesByCompany(id: string) {
    return this.employeesRepository.find({where: {
      companyId: id
    }})
  }
}
