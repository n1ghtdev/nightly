import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './inputs/create-task.input';

@Resolver('Tasks')
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [TaskDto])
  async tasks(@Args('projectId') projectId: string) {
    return this.tasksService.findByProjectId(projectId);
  }

  @Mutation(() => TaskDto)
  async createTask(
    @Args('projectId') projectId: string,
    @Args('input') input: CreateTaskInput,
  ) {
    return this.tasksService.create(projectId, input);
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Mutation(() => Boolean)
  async updateTask(
    @Args('id') id: string,
    @Args('updateData') updateData: CreateTaskInput,
  ) {
    return this.tasksService.update(id, updateData);
  }
}
