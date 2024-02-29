import { Company } from 'src/companies/entities/company.entity'
import { CompanyType } from 'src/companies/types/companies.type'
import { Column, Entity, ManyToOne, ObjectIdColumn, PrimaryColumn } from 'typeorm'

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id: string

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column({type: 'text', nullable: true})
  age: number

  @Column({nullable: true})
  companyId?: string

  @ManyToOne(() => Company, company => company.employeers)
  company: CompanyType
}
