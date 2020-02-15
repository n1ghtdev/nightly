import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './interfaces/project.interface';
import { ProjectInput } from './inputs/project.input';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  async findById(id: string): Promise<Project> {
    return await this.projectModel.findById(id);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectModel
      .find()
      .populate('tasks')
      .exec();
  }

  async create(project: ProjectInput): Promise<Project> {
    const createdProject = new this.projectModel(project);
    return await createdProject.save();
  }

  async delete(id: string): Promise<string> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      await this.projectModel.findOneAndRemove({ _id: id }, () => {});
    } catch (error) {
      throw new Error(error);
    } finally {
      return 'Task done';
    }
  }

  async update(id: string, update: any): Promise<Project> {
    try {
      const updated = await this.projectModel.findOneAndUpdate(
        { _id: id },
        update,
      );
      return updated;
    } catch (error) {
      throw new Error(error);
    }
  }
}
