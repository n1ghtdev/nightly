export interface Task {
  id: string;
  projectId: string;
  name: string;
  content?: string;
  isCompleted?: boolean;
  isCanceled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
  canceledAt?: Date;
}
