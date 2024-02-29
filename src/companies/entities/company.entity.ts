import { Employee } from 'src/employees/entities/employee.entity';
import { EmployeeType } from 'src/employees/types/employees.type';
import { Column, Entity, ObjectIdColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @ObjectIdColumn()
  _id: string

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  address: string

  @OneToMany(() => Employee, (employee) => employee.company)
  employeers: EmployeeType
}
