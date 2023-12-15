import User from "../models/userModel.js";

//@description    Authorize user and get token
//@route          POST /api/users/login
//@access         Public
const authUser = async (req, res) => {
  try {
    res.send("auth user");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Register/Create new user
//@route          POST /api/users
//@access         Public
const registerUser = async (req, res) => {
  try {
    res.send("register user");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Logout user and clear cookie
//@route          POST /api/users/logout
//@access         Private
const logoutUser = async (req, res) => {
  try {
    res.send("logout user");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Get single user profile
//@route          GET /api/users/profile
//@access         Private
const getUserProfile = async (req, res) => {
  try {
    res.send("get user profile");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Update user profile
//@route          PUT /api/users/profile
//@access         Private
const updateUserProfile = async (req, res) => {
  try {
    res.send("update user profile");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Get all users
//@route          GET /api/users
//@access         Private/Admin
const getUsers = async (req, res) => {
  try {
    res.send("get all user profiles");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Get user by ID
//@route          GET /api/users/:id
//@access         Private/Admin
const getUserByID = async (req, res) => {
  try {
    res.send("get user by ID");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Delete a user
//@route          DELETE /api/users/:id
//@access         Private/Admin
const deleteUser = async (req, res) => {
  try {
    res.send("delete user");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

//@description    Update a user
//@route          PUT /api/users/:id
//@access         Private/Admin
const updateUser = async (req, res) => {
  try {
    res.send("update user");
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
