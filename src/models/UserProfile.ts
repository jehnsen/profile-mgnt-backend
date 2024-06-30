import { Schema, model } from 'mongoose';
import { IUserProfile } from '../interfaces/IUserProfile';

const UserProfileSchema = new Schema<IUserProfile>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    tags: {
      type: [String],
    },
  });

const UserProfile = model<IUserProfile>('UserProfile', UserProfileSchema);

export default UserProfile;
