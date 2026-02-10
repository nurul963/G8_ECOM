import { Address } from "../../modals/index.js";


export const addAddressService=async(data)=>{
    let result;
    try {
        if(data.length > 1){
            result=await Address.bulkCreate(data);
        }
        else{
            result=await Address.create(data);
        }
        
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const getAddressService=async()=>{
    try {
        const result=await Address.findAll();
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const updateAddressService=async(id,data)=>{
    const address=await Address.findByPk(id);
    if(!address){
        return {statusCode:400,message:"Address not found"}
    }
    try {
        const result=await Address.update(data);
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}
export const deleteAddressService=async(id)=>{
    const address=await Address.findByPk(id);
    if(!address){
        return {statusCode:400,message:"Address not found"}
    }
    try {
        const result=await Address.destroy();
        return {statusCode:201,result}
    } catch (error) {
        return {statusCode:400,message:error.message}
    }
}