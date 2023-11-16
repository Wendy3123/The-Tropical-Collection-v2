import Product from "../models/productModel.js";

//FETCHES ALL PRODUCTS  ==> /api/products
const getProducts = async (req, res) => {
  try {
    // .find({}) ====> the {} inside the parentheses means to find ALL items
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//FETCHES SPECIFIC PRODUCT WITH REQ.PARAM.ID  ==> /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404);
    //using the errormiddleware we created
    throw new Error("Resource not found");
  }
};

export { getProducts, getProductById };
