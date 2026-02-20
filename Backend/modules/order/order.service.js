import sequelize from '../../config/database.js';
import { Cart, Order, OrderItem, Product } from '../../modals/index.js';
const createOrder = async (userId) => {
    try {
        return await sequelize.transaction(async (t) => {

            const cartItems = await Cart.findAll({
                where: { userId },
                include: [{
                    model: Product,
                    lock: true // 🔥 LOCK PRODUCT ROW
                }],
                transaction: t,
                lock: t.LOCK.UPDATE // 🔥 FOR UPDATE
            });

            if (cartItems.length === 0) {
                throw new Error("Cart is empty");
            }

            let totalamount = 0;

            const order = await Order.create(
                { totalAmount: 0, userId },
                { transaction: t }
            );

            for (let cart of cartItems) {

                const product = cart.product;

                if (!product) {
                    throw new Error("Product not Found");
                }

                if (product.stock < cart.quantity) {
                    throw new Error("Insufficient Stock");
                }

                const amount = parseInt(cart.quantity) * parseInt( product.price);
                totalamount += amount;

                await OrderItem.create({
                    quantity: cart.quantity,
                    priceAtPurchase: product.price,
                    orderId: order.id,
                    productId: product.id
                }, { transaction: t });

                // 🔥 IMPORTANT: Reduce Stock
                await product.update({
                    stock: product.stock - cart.quantity
                }, { transaction: t });
            }

            // 🔥 Update total inside transaction
            await order.update({ totalAmount: totalamount }, { transaction: t });

            // 🔥 Clear cart
            await Cart.destroy({
                where: { userId },
                transaction: t
            });

            return {
                statusCode: 200,
                message: "Order Created",
                order
            };
        });

    } catch (error) {
        return {
            statusCode: 400,
            message: error.message
        };
    }
};
export const orderService = { createOrder }