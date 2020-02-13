import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';
import { database } from './config/database';

@Module({
  imports: [
    ProjectsModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'scheme.gql' }),
    MongooseModule.forRoot(database),
  ],
  controllers: [AppController, ProjectsController],
  providers: [AppService],
})
export class AppModule {}
