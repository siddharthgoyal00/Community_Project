import {User} from "../db"
import express from "express";
import {z} from "zod";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config"

// handles the user routes 
const userRouter = express.Router();

//  zod schema 
const signUpSchema = z.object({
    username : z.string().email() ,
    firstName: z.string(),
    lastName : z.string(),
    password : z.string()
})

userRouter.post("/signup" , async (req,res)=>{
    const parsed  = signUpSchema.safeParse(req.body);
    if(!parsed.success && !req.body){
        res.status(400).json({
            msg: "wrong inputs/ email already taken"
        })
    }
    else {
        const existingUser = await User.findOne({
         username : req.body.username
        })
        if(existingUser){
            res.status(400).json({
                  msg: "wrong input / Email already"
            })
        }
        else{
            const user = await User.create({
                username : req.body.username,
                password : req.body.password,
                firstName : req.body.firstName,
                lastName : req.body.lastName
            })

            const userId = user._id
            const token = jwt.sign({userId}, JWT_SECRET)
            res.json({
                msg:"user created successfully", 
                token :token
            })
        }
    }
})

export default userRouter ;