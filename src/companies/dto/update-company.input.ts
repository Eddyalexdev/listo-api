import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field()
  name: string

  @Field()
  address?: string;
}
