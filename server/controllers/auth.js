import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserSchema from '../models/userModel.js'

export const register = async (req,res) => {
    const {firstName,lastName,email,password} = req.body;

        try {
            const existingUser = await UserSchema.findOne({email});
            if(existingUser) return res.status(400).json({message:'Email already exists'});
            const hashedPassword = await bcrypt.hash(password,12);
            const user = await UserSchema.create({email,password:hashedPassword,name:`${firstName.trim()} ${lastName.trim()}`});
            const token = jwt.sign({email:user.email,id:user._id},process.env.SECRET_CODE);
            res.status(201).json({user,token})
        } catch (error) {
            res.status(500).json({message:'something went wrong.Try later'});
        }
}

export const login = async (req,res) => {
    const {email,password} = req.body;

    try {
        const existingUser = await UserSchema.findOne({email});
        if(!existingUser) return res.status(404).json({message:'Email does not exists'});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:'Invalid Password'});

        const token = jwt.sign({email:existingUser.email,id:existingUser._id},process.env.SECRET_CODE);
        res.status(200).json({result:existingUser,token})
    } catch (error) {
        res.status(500).json({message:'something went wrong.Try later'});
    }
}

export const forgotpassword = async (req,res,next) => {
    const {email} = req.body;

    try {
        const existingUser = await UserSchema.findOne({email});
        if(!existingUser) return res.status(404).json({message:'Email could not be sent'});
        
    } catch (error) {
        
    }
}

export const resetpassword = async (req,res,next) => {
    res.send('Reset Password Route')
}