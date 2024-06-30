import { Request, Response } from 'express';
import {
  createUserProfile,
  getUserProfiles,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile
} from '../services/userProfileService';

export const createProfile = async (req: Request, res: Response) => {
  const { name, email, age, tags } = req.body;
  try {
    const newUserProfile = await createUserProfile({ name, email, age, tags });
    res.status(201).json(newUserProfile);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const getAllProfiles = async (req: Request, res: Response) => {
  try {
    const userProfiles = await getUserProfiles();
    res.status(200).json(userProfiles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const userProfile = await getUserProfileById(req.params.id);
    if (!userProfile) {
      return res.status(404).json({ error: 'UserProfile not found' });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { name, email, age, tags } = req.body;
  try {
    const updatedUserProfile = await updateUserProfile(req.params.id, { name, email, age, tags });
    if (!updatedUserProfile) {
      return res.status(404).json({ error: 'UserProfile not found' });
    }
    res.status(200).json(updatedUserProfile);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const deletedUserProfile = await deleteUserProfile(req.params.id);
    if (!deletedUserProfile) {
      return res.status(404).json({ error: 'UserProfile not found' });
    }
    res.status(200).json({ message: 'UserProfile deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};
