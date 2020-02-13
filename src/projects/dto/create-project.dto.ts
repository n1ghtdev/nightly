import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CreateProjectDto {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
}
