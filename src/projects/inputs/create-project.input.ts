import { InputType, Field } from 'type-graphql';
import { Project } from '../interfaces/project.interface';

@InputType()
export class CreateProjectInput implements Partial<Project> {
  @Field()
  readonly name: string;
}
