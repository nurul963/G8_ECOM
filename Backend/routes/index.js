import express from 'express';
import userRoute from '../modules/user/user.route.js';
import addressRoute from '../modules/address/address.route.js';
import categoryRoute from '../modules/category/category.route.js';
import productRoute from '../modules/product/product.route.js';
import cartRoute from '../modules/cart/cart.route.js';
const router=express.Router();
router.use("/user",userRoute);
router.use("/address",addressRoute);
router.use("/category",categoryRoute);
router.use("/product",productRoute);
router.use("/cart",cartRoute);
export default router