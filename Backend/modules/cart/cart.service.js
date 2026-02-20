import { where } from "sequelize";
import { Cart, Category, Product, ProductImage, User } from "../../modals/index.js";

const addToCart=async(userId,data)=>{
    try {
        const {quantity,productId}=data;
        const product=await Product.findOne({where:{id:productId}})
        if(!product){
            return {
                statusCode:400,
                message:"Product Not found"
            }
        }
        if(product.stock < quantity){
            return {
                statusCode:400,
                message:"Product is out of stock"
            }
        }
        const exsisting=await Cart.findOne({
            where:{userId,productId}
        })
        if(!exsisting){
            await Cart.create({
                userId,
                productId,
                quantity
            })
        }else{
            exsisting.quantity+=quantity;
            await exsisting.save();
        }
        return {
            statusCode:200,
            message:"Product added into cart"
        }
    } catch (error) {
        console.log(error);
    }
}
const getCart=async(userId)=>{
    try {
       const cart=await Cart.findAll({
        where:{userId}
       }) 
       return {
        statusCode:200,
        cart
       }
    } catch (error) {
       console.log(error.message); 
    }
}
export const cartService={addToCart,getCart}