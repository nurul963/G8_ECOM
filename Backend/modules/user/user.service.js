import { User } from "../../modals/index.js";

export const addUserService=async(data)=>{
    try {
        const result=await User.create(data);
        return {
            statusCode:201,
            result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
