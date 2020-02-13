import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectInput } from './inputs/project.input';

@Resolver('Projects')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => CreateProjectDto)
  async create(@Args('input') input: ProjectInput) {
    return this.projectsService.create(input);
  }

  @Query(() => [CreateProjectDto])
  async projects() {
    return this.projectsService.findAll();
  }

  @Query(() => CreateProjectDto)
  async project(@Args('id') id: string) {
    return this.projectsService.findById(id);
  }

  @Mutation(() => String)
  async delete(@Args('id') id: string) {
    return this.projectsService.delete(id);
  }
}
