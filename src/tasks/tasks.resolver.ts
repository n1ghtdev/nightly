import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { TaskInputDto } from './dto/task-input.dto';

@Resolver('Tasks')
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [TaskDto])
  async tasks(@Args('projectId') projectId: string) {
    return this.tasksService.findByProjectId(projectId);
  }

  @Mutation(() => [TaskDto])
  async createTask(
    @Args('projectId') projectId: string,
    @Args('input') input: TaskInputDto,
  ) {
    return this.tasksService.create(projectId, input);
  }
}
