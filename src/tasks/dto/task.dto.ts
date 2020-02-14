import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class TaskDto {
  @Field(() => ID)
  readonly id: string;
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
