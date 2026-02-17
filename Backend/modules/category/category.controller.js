import { categoryService } from "./category.service.js";
export const addCategory=async(req,resp)=>{
    const result=await categoryService.addCategory(req.body);
    return resp.status(result.statusCode).json(result);
}
export const getCategory=async(req,resp)=>{
    const result=await categoryService.getCategory();
    return resp.status(result.statusCode).json(result);
}
export const getCategoryById=async(req,resp)=>{
    const id=req.params.id;
    const result=await categoryService.getCategoryById(id);
    return resp.status(result.statusCode).json(result);
}
export const updateCategory=async(req,resp)=>{
    const id=req.params.id;
    const result=await categoryService.updateCategory(id,req.body);
    return resp.status(result.statusCode).json(result);
}
export const deleteCategory=async(req,resp)=>{
    const id=req.params.id;
    const result=await categoryService.deleteCategory(id);
    return resp.status(result.statusCode).json(result);
}