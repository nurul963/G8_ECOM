import {Order} from '../../modals/index.js'
import { PgInitiatePayment } from '../../util/phonepayPayment.js';
const checkout=async(userId,orderId)=>{
    try {
        const order=await Order.findOne({where:{id:orderId}});
        const amount=parseInt(order.totalAmount)*100;
        const merchantOrderId=`TXN_${orderId}_${Date.now()}`;
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
export const paymentService={checkout}