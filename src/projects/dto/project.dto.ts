import { ObjectType, Field, ID } from 'type-graphql';
import { Task } from 'src/tasks/interfaces/task.interface';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { Project } from '../interfaces/project.interface';

@ObjectType()
export class ProjectDto implements Partial<Project> {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => TaskDto)
  readonly tasks: Task[];
}
