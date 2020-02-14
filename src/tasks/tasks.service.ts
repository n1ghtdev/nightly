import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { ProjectsService } from 'src/projects/projects.service';
import { TaskInputDto } from './dto/task-input.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
    private readonly projectsService: ProjectsService,
  ) {}

  async findByProjectId(projectId: string): Promise<Task[]> {
    return await this.taskModel.find({ projectId }).exec();
  }

  async create(projectId: string, task: TaskInputDto): Promise<Task[]> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save(async err => {
      if (err) return err;

      const currentProject = await this.projectsService.findById(projectId);

      console.log(currentProject);
      if (!currentProject.tasks) {
        currentProject.tasks = [];
      }

      currentProject.tasks.push(createdTask._id);
      this.projectsService.update(projectId, currentProject);

      return currentProject.tasks;
    });
  }
}
