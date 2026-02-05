import { addUserService } from "./user.service.js"

export const addUser=async(req,resp)=>{
    const result=await addUserService(req.body);
    return resp.status(result.statusCode).json({
        result
    })
}