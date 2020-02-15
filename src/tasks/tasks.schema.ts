import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    name: String,
    content: String,
    isCompleted: Boolean,
    isCanceled: Boolean,
    completedAt: String,
    canceledAt: String,
  },
  {
    timestamps: true,
  },
);
