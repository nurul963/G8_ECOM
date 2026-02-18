import { cartService } from "./cart.service.js";
const addToCart=async(req,resp)=>{
    const result=await cartService.addToCart(req.body);
    return resp.status(result.statusCode).json(result);
}
const getCart=async(req,resp)=>{
    const userId=req.user.id;
    const result=await cartService.getCart(userId);
    return resp.status(result.statusCode).json(result);
}
export const cartController={addToCart,getCart}