import { ObjectType, Field, ID } from 'type-graphql';
import { Task } from '../interfaces/task.interface';

@ObjectType()
export class TaskDto implements Partial<Task> {
  @Field(() => ID)
  readonly id: string;
  @Field(() => ID)
  readonly projectId: string;
  @Field()
  readonly name: string;
  @Field()
  readonly content: string;
  @Field()
  readonly isCompleted: boolean;
  @Field()
  readonly isCanceled: boolean;
  @Field()
  readonly completedAt: Date;
  @Field()
  readonly canceledAt: Date;
}
