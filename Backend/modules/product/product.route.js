import express from 'express';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { roleAccessMiddleWare } from '../../middleware/roleAccessMiddleware.js';
import { addProduct, getAllProduct, getProductById } from './product.controller.js';
const router=express.Router();
router.post("/",isAuthenticated,roleAccessMiddleWare('ADMIN','SELLER'),addProduct);
router.get("/",isAuthenticated,roleAccessMiddleWare('USER','ADMIN','SELLER'),getAllProduct);
router.get("/:id",isAuthenticated,roleAccessMiddleWare('USER','ADMIN','SELLER'),getProductById);
export default router;