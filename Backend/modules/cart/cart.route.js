import express from 'express';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { cartController } from './cart.controller.js';
const router=express.Router();
router.post("/",isAuthenticated,cartController.addToCart);
router.get("/",isAuthenticated,cartController.getCart);
export default router