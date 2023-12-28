import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get("/", async (req, res) => {
//   getProducts();
// });
router.route("/").get(getProducts).post(protect, admin, createProduct);

// router.get("/:id", async (req, res) => {
//   getProductById();
// });
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
