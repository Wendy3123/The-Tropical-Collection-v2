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

//@description    Create a product
//@route          POST /api/products
//@access         Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(200).json(createdProduct);
});

//@description    Update a product
//@route          PUT /api/products/:id
//@access         Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, category, countInStock } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@description    Delete a product
//@route          DELETE /api/products/:id
//@access         Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
