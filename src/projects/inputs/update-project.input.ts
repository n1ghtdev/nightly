import { InputType, Field } from 'type-graphql';
import { Project } from '../interfaces/project.interface';

@InputType()
export class UpdateProjectInput implements Partial<Project> {
  @Field({ nullable: true })
  readonly name?: string;
}
