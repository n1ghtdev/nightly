import { Task } from 'src/tasks/interfaces/task.interface';

export interface Project {
  id?: string;
  name: string;
  tasks: Task[];
}
