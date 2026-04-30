import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.json({message: "User registered successfully"});

    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}