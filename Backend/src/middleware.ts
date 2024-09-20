import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";
const {verify} = jwt;
export const authMiddleware = (req: Request, res : Response, next: NextFunction) => {     // anytime req comes 
    const authHeader = req.headers.authorization;    // get the  authHeader

    if (!authHeader || !authHeader.startsWith('Bearer ')) {  // make sure that it starts with the Bearer 
        return res.status(403).json({});  //or it could be API key 
    }
 
// bearer and the API key are the type of the token 

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};