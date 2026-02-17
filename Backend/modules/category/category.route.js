import express from 'express';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { roleAccessMiddleWare } from '../../middleware/roleAccessMiddleware.js';
import { addCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from './category.controller.js';
const router=express.Router();
router.post("/",isAuthenticated,roleAccessMiddleWare('SELLER','ADMIN'),addCategory);
router.get("/",isAuthenticated,roleAccessMiddleWare('SELLER','ADMIN'),getCategory);
router.get("/:id",isAuthenticated,roleAccessMiddleWare('SELLER','ADMIN'),getCategoryById);
router.put("/:id",isAuthenticated,roleAccessMiddleWare('SELLER','ADMIN'),updateCategory);
router.delete("/:id",isAuthenticated,roleAccessMiddleWare('ADMIN','SELLER'),deleteCategory);
export default router