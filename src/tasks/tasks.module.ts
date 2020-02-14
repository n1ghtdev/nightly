import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { TaskSchema } from './tasks.schema';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
