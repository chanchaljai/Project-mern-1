import express from "express";
import { createProduct, getAllProducts, updateProduct, deleteProduct, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getAllProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/single/:id", getSingleProduct);

export default router;