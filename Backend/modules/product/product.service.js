import { where } from 'sequelize';
import {Category, Product} from '../../modals/index.js'; 
const addProduct=async(data)=>{
    try {
        const result=await Product.create(data);
        return {
            statusCode:200,
            message:"Product Addedd Successfully",
            result
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
            include:[Category]
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