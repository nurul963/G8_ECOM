import {Order, Payment} from '../../modals/index.js'
import { checkPaymentStauts, PgInitiatePayment } from '../../util/phonepayPayment.js';
import {randomUUID} from 'crypto';
const checkout=async(userId,orderId)=>{
    try {
        const order=await Order.findOne({where:{id:orderId}});
        const amount=parseInt(order.totalAmount)*100;
        const randomuid=randomUUID();
        const merchantOrderId=`TXN_${orderId}_${randomuid}_${Date.now()}`;
        const response=await PgInitiatePayment(orderId,userId,amount,merchantOrderId);
        return {
            statusCode:200,
            response
        }
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
const checkPhonePayPaymentStatus=async(merchantOrderId)=>{
    try {
        const response=await checkPaymentStauts(merchantOrderId);
        if(response.state==="COMPLETED"){
            const id=response.metaInfo.udf1;
            const order=await Order.findByPk(id);
            order.status="PAID";
            await order.save();
            await Payment.create({
                orderId:id,
                method:"UPI",
                status:"SUCCESS",
                transactionId:merchantOrderId
            });
        }else{
           const id=response.metaInfo.udf1;
            await Payment.create({
                orderId:id,
                method:"UPI",
                status:"FAILED",
                transactionId:merchantOrderId
            }); 
        }
        return {
            statusCode:200,
            response
        };
    } catch (error) {
        return {
            statusCode:400,
            message:error.message
        }
    }
}
export const paymentService={checkout,checkPhonePayPaymentStatus}