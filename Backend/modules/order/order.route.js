import express from 'express';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { orderController } from './order.controller.js';
const router=express.Router();
router.post("/",isAuthenticated,orderController.createOrder);
export default router