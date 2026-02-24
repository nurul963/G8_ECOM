import { CreateSdkOrderRequest, MetaInfo } from "pg-sdk-node";
import { API_URL } from "./constant.js";
import { client } from "../config/phonpayConfig.js";
export const PgInitiatePayment=async(orderId,userId,amount,merchantOrderId)=>{
    const metaInfo = MetaInfo.builder()
        .udf1(orderId.toString())
        .udf2(userId.toString())
        .build();
    const orderRequest = CreateSdkOrderRequest.StandardCheckoutBuilder()
        .merchantOrderId(merchantOrderId)
        .amount(amount)
        .metaInfo(metaInfo)
        .redirectUrl(`${API_URL}/payment/verify?merchantOrderId=${merchantOrderId}`)
        .build();
    const response=await client.pay(orderRequest);
    return response;
}
export const checkPaymentStauts=async(merchantOrderId)=>{
    const response=await client.getOrderStatus(merchantOrderId);

    return response;
}