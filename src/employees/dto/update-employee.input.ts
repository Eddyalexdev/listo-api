import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @IsNotEmpty({message: "El nombre no debe estar vacio"})
  @IsString({message: "El nombre debe ser de tipo string"})
  @Field()
  name: string

  @IsInt({message: "La edad debe ser un numero entero"})
  @Field(() => Int, {nullable: true})
  age: number
}
