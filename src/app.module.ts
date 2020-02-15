import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { database } from './config/database';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ProjectsModule,
    TasksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'scheme.gql',
    }),
    MongooseModule.forRoot(database, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
