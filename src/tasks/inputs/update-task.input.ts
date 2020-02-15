import { InputType, Field } from 'type-graphql';
import { Task } from '../interfaces/task.interface';

@InputType()
export class UpdateTaskInput implements Partial<Task> {
  @Field()
  readonly name: string;
  @Field({ nullable: true })
  readonly content?: string;
  @Field({ nullable: true })
  readonly isCompleted?: boolean;
  @Field({ nullable: true })
  readonly isCanceled?: boolean;
  @Field({ nullable: true })
  readonly completedAt?: Date;
  @Field({ nullable: true })
  readonly canceledAt?: Date;
}
