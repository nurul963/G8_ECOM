import express from 'express';
import userRoute from '../modules/user/user.route.js';
import addressRoute from '../modules/address/address.route.js';
const router=express.Router();
router.use("/user",userRoute);
router.use("/address",addressRoute)
export default router