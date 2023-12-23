import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//@description    Creates new order
//@route          POST /api/orders
//@access         Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  //if there is an orderitems array but its empty
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@description    Get logged in user orders
//@route          GET /api/orders/myorders
//@access         Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({
    user: req.user._id,
  });
  res.status(200).json(orders);
});

//@description    Get order by ID
//@route          GET /api/orders/:id
//@access         Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(400);
    throw new Error("Order not found");
  }
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
