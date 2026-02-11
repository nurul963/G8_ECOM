import { addUserService, deleteUserService, getUserService, loginUserService, updateUserService } from "./user.service.js"

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
export const loginUser=async(req,resp)=>{
    const result=await loginUserService(req.body);
    if(result && result.result && result.result.token){
        resp.cookie('token',token,{
            httpOnly:true,
            secure:false,
            samesite:'strict',
            maxAge:60*60*1000
        })
    }
    const id=result.result.id;
    const name=result.result.name;
    const email=result.result.email;
    return resp.status(result.statusCode).json({
        id,name,email,
        message:"Login Success"
    })
}
export const logoutUser=async(req,resp)=>{
    resp.clearCookie();
    return resp.status(200).json({
        statusCode:200,
        message:"Logout Successfully"
    })
}