// import UserProfile from '../models/userProfile';
import { IUserProfile } from '../interfaces/IUserProfile';
import UserProfile from '../models/UserProfile';

export const createUserProfile = async (profile: IUserProfile) => {
  const newUserProfile = new UserProfile(profile);
  return await newUserProfile.save();
};

export const getUserProfiles = async () => {
  return await UserProfile.find();
};

export const getUserProfileById = async (id: string) => {
  return await UserProfile.findById(id);
};

export const updateUserProfile = async (id: string, profile: IUserProfile) => {
  return await UserProfile.findByIdAndUpdate(id, profile, { new: true });
};

export const deleteUserProfile = async (id: string) => {
  return await UserProfile.findByIdAndDelete(id);
};
