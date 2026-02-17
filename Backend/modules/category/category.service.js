import { where } from 'sequelize';
import {Category, Product} from '../../modals/index.js'
//Add category bulk or single
const addCategory=async(data)=>{
    try {
        let result;
        if(data.length > 1){
            result=await Category.bulkCreate(data);
        }else{
            result=await Category.create(data);
        }
        return {
            statusCode:201,
            message:"Category Addedd",
            result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
     
}
//get all category
const getCategory=async()=>{
    try {
        const result=await Category.findAll({
            include:[Product]
        });
        return {
            statusCode:200,
            message:"Category List",
            result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
//get category by id
const getCategoryById=async(id)=>{
    try {
        const result=await Category.findOne({
            where:{id:id},
            include:[Product]
        });
        if(!result){
            return {
                statusCode:200,
                message:"Category Not Found",
                result
            } 
        }
       return {
            statusCode:200,
            message:"Category By Id",
            result
        } 
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
//delete category
const updateCategory=async(id,data)=>{
    try {
        const cate=await findByPk(id);
        if(!cate){
            return {
                statusCode:200,
                message:"Category not found"
            }
        }
        const result=await cate.update(data);
        return {
                statusCode:200,
                message:"Category Updated",
                result
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
const deleteCategory=async(id)=>{
    try {
        const cate=await findByPk(id);
        if(!cate){
            return {
                statusCode:200,
                message:"Category not found"
            }
        }
        const result=await cate.destroy();
        return {
                statusCode:200,
                message:"Category Deleted"
        }
    } catch (error) {
       return {
            statusCode:400,
            message:error.message
        } 
    }
}
export const categoryService={
    addCategory,
    getCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}