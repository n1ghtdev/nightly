import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/project.dto';
import { CreateProjectInput } from './inputs/create-project.input';
import { UpdateProjectInput } from './inputs/update-project.input';

@Resolver('Projects')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => ProjectDto)
  async create(@Args('input') input: CreateProjectInput) {
    return this.projectsService.create(input);
  }

  @Query(() => [ProjectDto])
  async projects() {
    return this.projectsService.findAll();
  }

  @Query(() => ProjectDto)
  async project(@Args('id') id: string) {
    return this.projectsService.findById(id);
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string) {
    return this.projectsService.delete(id);
  }

  @Mutation(() => Boolean)
  async update(
    @Args('id') id: string,
    @Args('updateData') updateData: UpdateProjectInput,
  ) {
    return this.projectsService.update(id, updateData);
  }
}
