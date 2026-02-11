import express from 'express';
import { addUser, deleteUser, getUser, loginUser, logoutUser, updateUser } from './user.controller.js';
import { isAuthenticated } from '../auth/isAuthenticated.js';
import { roleAccessMiddleWare } from '../../middleware/roleAccessMiddleware.js';
const router=express.Router();
router.post("/add",isAuthenticated,addUser);
router.get("/",isAuthenticated,getUser);
router.put("/update/:id",isAuthenticated,updateUser);
router.delete("/delete/:id",isAuthenticated,roleAccessMiddleWare('ADMIN'),deleteUser);
router.post("/login",loginUser)
router.get("/logout",logoutUser);
export default router