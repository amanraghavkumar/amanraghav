import mongoose, { Schema, Document } from 'mongoose';

export interface IDownloadLog extends Document {
  projectId: string;
  userId: string;
  email: string;
  timestamp: Date;
}

const DownloadLogSchema = new Schema<IDownloadLog>(
  {
    projectId: {
      type: String,
      required: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
DownloadLogSchema.index({ projectId: 1, userId: 1 });
DownloadLogSchema.index({ timestamp: -1 });

export default mongoose.models.DownloadLog || 
  mongoose.model<IDownloadLog>('DownloadLog', DownloadLogSchema);