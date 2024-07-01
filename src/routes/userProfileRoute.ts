import { Router } from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile
} from '../controllers/userProfileController';
import validateProfile from '../middlewares/validateProfile';

const router = Router();

router.post('/', validateProfile, createProfile);
router.get('/', getAllProfiles);
router.get('/:id', getProfileById);
router.put('/:id', validateProfile, updateProfile);
router.delete('/:id', deleteProfile);

export default router;
