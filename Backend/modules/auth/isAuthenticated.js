import jwt from 'jsonwebtoken';
import { SECERATE_KEY } from '../../util/constant.js';
export const isAuthenticated=async(req,resp,next)=>{
    // console.log(req);
    // console.log(resp);
    const token=req.cookies.token || null;
    // console.log(token);
    if(!token){
        return resp.status(400).json({
            statusCode:400,
            message:"User not Authenticated"
        })
    }
    try {
        const decode=jwt.verify(token,SECERATE_KEY);
        req.user={
            id:decode.id,
            role:decode.role,
            email:decode.email
        }
        next();
    } catch (error) {
        return resp.status(400).json({
            statusCode:400,
            message:"Token is expired"
        })
    }
}