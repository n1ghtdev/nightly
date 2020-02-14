import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class TaskInputDto {
  @Field()
  readonly name: string;
  @Field()
  readonly content?: string;
  @Field()
  readonly isCompleted: boolean;
  @Field()
  readonly isCanceled: boolean;
  @Field()
  readonly completedAt: string;
  @Field()
  readonly canceledAt: string;
}
