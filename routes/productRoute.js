const express = require("express");
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router()

router.post("/create", createProduct);
router.get("/get", getProducts);
router.get("/get/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router