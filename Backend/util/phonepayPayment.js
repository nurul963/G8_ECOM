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
        .redirectUrl(API_URL)
        .build();
    const response=await client.pay(orderRequest);
    return response;
}