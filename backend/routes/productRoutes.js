import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

// router.get("/", async (req, res) => {
//   getProducts();
// });
router.route("/").get(getProducts);

// router.get("/:id", async (req, res) => {
//   getProductById();
// });
router.route("/:id").get(getProductById);

export default router;
