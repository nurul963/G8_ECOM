import express from 'express';
import { paymentController } from './payment.controller.js';
import { isAuthenticated } from '../auth/isAuthenticated.js';
const router=express.Router();
router.post("/",isAuthenticated,paymentController.checkout);
router.get("/verify",isAuthenticated,paymentController.checkPhonePayPaymentStatus);
export default router;