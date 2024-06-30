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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserProfile = exports.updateUserProfile = exports.getUserProfileById = exports.getUserProfiles = exports.createUserProfile = void 0;
const UserProfile_1 = __importDefault(require("../models/UserProfile"));
const createUserProfile = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    const newUserProfile = new UserProfile_1.default(profile);
    return yield newUserProfile.save();
});
exports.createUserProfile = createUserProfile;
const getUserProfiles = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserProfile_1.default.find();
});
exports.getUserProfiles = getUserProfiles;
const getUserProfileById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserProfile_1.default.findById(id);
});
exports.getUserProfileById = getUserProfileById;
const updateUserProfile = (id, profile) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserProfile_1.default.findByIdAndUpdate(id, profile, { new: true });
});
exports.updateUserProfile = updateUserProfile;
const deleteUserProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserProfile_1.default.findByIdAndDelete(id);
});
exports.deleteUserProfile = deleteUserProfile;
