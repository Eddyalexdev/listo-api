import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { CompanyType } from 'src/companies/types/companies.type';

@ObjectType('Employee')
export class EmployeeType {
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field(() => Int, {nullable: true})
    age: number

    @Field({nullable: true})
    companyId?: string

    @Field(() => CompanyType)
    company: CompanyType
}