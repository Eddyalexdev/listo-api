import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateEmployeeInput {
  @IsNotEmpty({message: "El nombre no debe estar vacio"})
  @IsString({message: "El nombre debe ser de tipo string"})
  @Field()
  name: string

  @IsInt({message: "La edad debe ser un numero entero"})
  @Field(() => Int, {nullable: true})
  age: number

  @IsString()
  @IsNotEmpty()
  @Field()
  companyId: string
}
