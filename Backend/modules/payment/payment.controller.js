import { paymentService } from "./payment.service.js";

const checkout=async(req,resp)=>{
    const userId=req.user.id;
    const {orderId}=req.body;
    const result=await paymentService.checkout(userId,orderId);
    return resp.status(result.statusCode).json(result);
}

const checkPhonePayPaymentStatus=async(req,resp)=>{
    const merchantOrderId=req.query.merchantOrderId;
    const result=await paymentService.checkPhonePayPaymentStatus(merchantOrderId);
    return resp.status(result.statusCode).json(result);
}
export const paymentController={
    checkout,
    checkPhonePayPaymentStatus
};