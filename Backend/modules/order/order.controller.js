import { orderService } from "./order.service.js";
const createOrder=async(req,resp)=>{
    const userId=req.user.id || null;
    if(!userId){
        return resp.status(400).json({
            statusCode:400,
            message:"User not found"
        })
    }
    const order=await orderService.createOrder(userId);
    return resp.status(order.statusCode).json(order)
}
export const orderController={createOrder}