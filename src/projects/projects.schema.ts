import * as mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    timestamps: true,
  },
);
ProjectSchema.pre('deleteOne', { document: true }, function(next) {
  const projectId = this.getQuery()['_id'];
  console.log(this.getQuery());

  mongoose
    .model('Task')
    .deleteMany({ _id: '5e483d28b69b44528206be90' }, function(err, result) {
      if (err) {
        console.log(err);

        next(err);
      } else {
        next();
      }
    });
  // mongoose.model('Task').update({ projectId: project._id }, { $pull: {}})
});

export { ProjectSchema };
