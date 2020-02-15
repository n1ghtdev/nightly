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

  async create(projectId: string, task: TaskInputDto): Promise<Task> {
    const createdTask = new this.taskModel(task);
    await this.projectsService.update(projectId, {
      $push: { tasks: createdTask._id },
    });
    return await createdTask.save();
  }

  async update(id: string, update: any): Promise<Task> {
    return await this.taskModel.findOneAndUpdate({ _id: id }, update);
  }

  async delete(id: string): Promise<boolean> {
    const status = await this.taskModel.deleteOne({ _id: id });
    return status.deletedCount > 0 && status.ok === 1 ? true : false;
  }
}
