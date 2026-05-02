import Product from "../models/product.js";

// create product
export const createProduct = async (req, res) => {
    try {
        const { title, description, price, image, category, stock } = req.body;
          console.log("BODY:", req.body);
        const product = await Product.create({
            title,
            description,
            price,
            image,
            category,
            stock,
        });
        res.status(201).json({ product, message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({ product, message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ product, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};