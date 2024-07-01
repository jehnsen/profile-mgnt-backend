import { Request, Response, NextFunction } from 'express';

const validateProfile = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, age, tags } = req.body;
    if (!name || !email) return res.status(400).json({ msg: "Name and Email are required" });
    if (age && typeof age !== 'number') return res.status(400).json({ msg: "Age must be a number" });
    if (tags && !Array.isArray(tags)) return res.status(400).json({ msg: "Tags must be an array" });
    next();
};

export default validateProfile;