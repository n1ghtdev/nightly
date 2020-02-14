export interface Task {
  id?: string;
  projectId: string;
  name: string;
  content: string;
  isCompleted: boolean;
  isCanceled: boolean;
  createdAt: string;
  completedAt: string;
  canceledAt: string;
}
