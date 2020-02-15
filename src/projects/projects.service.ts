import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './interfaces/project.interface';
import { CreateProjectInput } from './inputs/create-project.input';
import { UpdateProjectInput } from './inputs/update-project.input';

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

  async create(project: CreateProjectInput): Promise<Project> {
    const createdProject = new this.projectModel(project);
    return await createdProject.save();
  }

  async delete(id: string): Promise<boolean> {
    const status = await this.projectModel.deleteOne({ _id: id });
    return status.deletedCount > 0 && status.ok === 1 ? true : false;
  }

  async update(id: string, update: UpdateProjectInput | any): Promise<boolean> {
    try {
      const status = await this.projectModel.updateOne({ _id: id }, update);
      return status.nModified > 0 && status.ok === 1 ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
