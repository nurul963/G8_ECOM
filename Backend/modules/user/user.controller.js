import { addUserService, deleteUserService, getUserService, updateUserService } from "./user.service.js"

export const addUser=async(req,resp)=>{
    const result=await addUserService(req.body);
    return resp.status(result.statusCode).json({
        result
    })
}
export const getUser=async(req,resp)=>{
    const result=await getUserService();
    return resp.status(result.statusCode).json({
        result
    })
}
export const updateUser=async(req,resp)=>{
    const id=req.params.id
    const result=await updateUserService(id,req.body);
    return resp.status(result.statusCode).json({
        result
    })
}
export const deleteUser=async(req,resp)=>{
    const id=req.params.id
    const result=await deleteUserService(id);
    return resp.status(result.statusCode).json({
        result
    })
}
