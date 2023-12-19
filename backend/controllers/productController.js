import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//FETCHES ALL PRODUCTS  ==> /api/products
const getProducts = asyncHandler(async (req, res) => {
  // try {
  //   // .find({}) ====> the {} inside the parentheses means to find ALL items
  //   const products = await Product.find({});
  //   res.json(products);
  // } catch (error) {
  //   console.log(error.messsage);
  //   res.send(404).json({ errorInfo: error.message });
  // }
  const products = await Product.find({});
  res.json(products);
});

//FETCHES SPECIFIC PRODUCT WITH REQ.PARAM.ID  ==> /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    // NOTE: this will run if a valid ObjectId but no product was found
    // i.e. product may be null
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
