"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.getProfileById = exports.getAllProfiles = exports.createProfile = void 0;
const userProfileService_1 = require("../services/userProfileService");
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age, tags } = req.body;
    try {
        const newUserProfile = yield (0, userProfileService_1.createUserProfile)({ name, email, age, tags });
        res.status(201).json(newUserProfile);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.createProfile = createProfile;
const getAllProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userProfiles = yield (0, userProfileService_1.getUserProfiles)();
        res.status(200).json(userProfiles);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.getAllProfiles = getAllProfiles;
const getProfileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userProfile = yield (0, userProfileService_1.getUserProfileById)(req.params.id);
        if (!userProfile) {
            return res.status(404).json({ error: 'UserProfile not found' });
        }
        res.status(200).json(userProfile);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.getProfileById = getProfileById;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age, tags } = req.body;
    try {
        const updatedUserProfile = yield (0, userProfileService_1.updateUserProfile)(req.params.id, { name, email, age, tags });
        if (!updatedUserProfile) {
            return res.status(404).json({ error: 'UserProfile not found' });
        }
        res.status(200).json(updatedUserProfile);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.updateProfile = updateProfile;
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUserProfile = yield (0, userProfileService_1.deleteUserProfile)(req.params.id);
        if (!deletedUserProfile) {
            return res.status(404).json({ error: 'UserProfile not found' });
        }
        res.status(200).json({ message: 'UserProfile deleted successfully' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.deleteProfile = deleteProfile;
