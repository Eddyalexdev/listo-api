import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EmployeeType } from 'src/employees/types/employees.type';

@ObjectType()
export class CompanyType {
    @Field((type) => ID)
    id: string 

    @Field()
    name: string

    @Field()
    address: string

    @Field(() => [EmployeeType], { nullable: true })
    employees: EmployeeType[]
}