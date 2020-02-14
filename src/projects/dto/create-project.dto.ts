import { ObjectType, Field, ID } from 'type-graphql';
import { Task } from 'src/tasks/interfaces/task.interface';
import { TaskDto } from 'src/tasks/dto/task.dto';

@ObjectType()
export class CreateProjectDto {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => TaskDto)
  readonly tasks: Task[];
}
