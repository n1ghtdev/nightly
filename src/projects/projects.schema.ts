import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    timestamps: true,
  },
);
