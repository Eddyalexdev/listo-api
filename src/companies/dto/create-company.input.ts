import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string

  @Field()
  address: string
}
