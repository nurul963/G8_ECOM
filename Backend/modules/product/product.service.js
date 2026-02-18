import { uploadImages } from '../../config/cloudinary.js';
import {Category, Product, ProductImage} from '../../modals/index.js'; 
const addProduct=async(files,data)=>{
    try {
        const product=await Product.create(data);
        // console.log(data);
        const uploadImage=[];
        for(let file of files){
            const result=await uploadImages(file);
            uploadImage.push({
                imageUrl:result.secure_url,
                publicId:result.public_id,
                productId:product.id
            });
            if(uploadImage.length===files.length)
                await ProductImage.bulkCreate(uploadImage);
        }
        return {
            statusCode:200,
            message:"Product Addedd Successfully",
            product
       } 
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       } 
    }
}
const getAllProduct=async()=>{
    try {
        const result=await Product.findAll({
            include:{model:Category,model:ProductImage}
        })
       return {
            statusCode:200,
            message:"Product List Fetched",
            result
       }  
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       }  
    }
}
const getProductById=async(id)=>{
    try {
        const result=await Product.findOne({
            where:{id},
            include:[Category]
        });
        if(!result){
           return {
            statusCode:400,
            message:"Product not found",
            result
        } 
        }
        return {
            statusCode:200,
            message:"Product Fetched",
            result
       }
    } catch (error) {
       return {
        statusCode:400,
        message:error.message
       } 
    }
}
export const productService={
    addProduct,
    getAllProduct,
    getProductById
}