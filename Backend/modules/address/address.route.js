import express from 'express';
import { addAddress, deleteAddress, getAddress, updateAddress } from './address.controller.js';
const router=express.Router();
router.post("/",addAddress);
router.get("/",getAddress);
router.put("/:id",updateAddress);
router.delete("/:id",deleteAddress)
export default router