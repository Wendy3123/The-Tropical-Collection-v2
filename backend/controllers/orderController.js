import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//@description    Creates new order
//@route          POST /api/orders
//@access         Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

//@description    Get logged in user orders
//@route          GET /api/orders/myorders
//@access         Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

//@description    Get order by ID
//@route          GET /api/orders/:id
//@access         Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by ID");
});

//@description    Update order to paid
//@route          GET /api/orders/:id/pay
//@access         Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

//@description    Update order to delivered
//@route          GET /api/orders/:id/deliver
//@access         Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

//@description    Get all orders
//@route          GET /api/orders/:id/deliver
//@access         Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
