import { Router } from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile
} from '../controllers/userProfileController';

const router = Router();

router.post('/', createProfile);
router.get('/', getAllProfiles);
router.get('/:id', getProfileById);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

export default router;
