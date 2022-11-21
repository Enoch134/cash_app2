import User from "../models/UserModel.js";
// import User from "../models/RequestModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) return res.status(404).json({ msg: "User not found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.uid;
    const uid = user.uid;
    const staffId = user.staffId;
    const name = user.name;
    const userName = user.UserName;
    const email = user.email;
    const number = user.number;
    const department = user.department;
    const role = user.role;
    res.status(200).json({ uid, staffId, name, userName, email, number, department, role });
}

export const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['uid', 'staffId', 'name', 'userName', 'email', 'number', 'department', 'role'],
        where: {
            uid: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}