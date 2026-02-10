import { addAddressService, deleteAddressService, getAddressService, updateAddressService } from "./address.service.js";

export const addAddress=async(req,resp)=>{
    const result=await addAddressService(req.body);
    return resp.status(result.statusCode).json({
        result
    })
}
export const getAddress=async(req,resp)=>{
    const result=await getAddressService();
    return resp.status(result.statusCode).json({
        result
    })
}
export const updateAddress=async(req,resp)=>{
    const id=req.params.id
    const result=await updateAddressService(id,req.body);
    return resp.status(result.statusCode).json({
        result
    })
}
export const deleteAddress=async(req,resp)=>{
    const id=req.params.id
    const result=await deleteAddressService(id);
    return resp.status(result.statusCode).json({
        result
    })
}
