import { InputType, Field } from 'type-graphql';

@InputType()
export class ProjectInput {
  @Field()
  readonly name: string;
}
