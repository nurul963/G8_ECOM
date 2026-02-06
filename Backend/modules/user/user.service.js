import { User } from "../../modals/index.js";

export const addUserService=async(data)=>{
    try {
        const result=await User.create(data);
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const getUserService=async()=>{
    try {
        const result=await User.findAll();
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const updateUserService=async(id,data)=>{
    const user=await User.findByPk(id);
    if(!user){
        return {statusCode:400,message:"User not found"}
    }
    try {
        const result=await user.update(data);
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const deleteUserService=async(id)=>{
    const user=await User.findByPk(id);
    if(!user){
        return {statusCode:400,message:"User not found"}
    }
    try {
        const result=await user.destroy();
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}