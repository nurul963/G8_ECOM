import express from 'express';
import userRoute from '../modules/user/user.route.js';
import addressRoute from '../modules/address/address.route.js';
import categoryRoute from '../modules/category/category.route.js';
import productCategory from '../modules/product/product.route.js';
const router=express.Router();
router.use("/user",userRoute);
router.use("/address",addressRoute);
router.use("/category",categoryRoute);
router.use("/product",productCategory);
export default router