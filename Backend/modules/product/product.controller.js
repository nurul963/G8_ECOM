import { productService } from "./product.service.js"

export const addProduct=async(req,resp)=>{
    const result=await productService.addProduct(req.body);
    return resp.status(result.statusCode).json(result);
}
export const getAllProduct=async(req,resp)=>{
    const result=await productService.getAllProduct();
    return resp.status(result.statusCode).json(result);
}
export const getProductById=async(req,resp)=>{
    const id=req.params.id;
    const result=await productService.getProductById(id);
    return resp.status(result.statusCode).json(result);
}