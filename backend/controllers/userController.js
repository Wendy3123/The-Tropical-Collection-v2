import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

//@description    Authorize user and get token
//@route          POST /api/users/login
//@access         Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //if there is a user
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@description    Register/Create new user
//@route          POST /api/users
//@access         Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    //if there is user created
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@description    Logout user and clear cookie
//@route          POST /api/users/logout
//@access         Private
const logoutUser = asyncHandler(async (req, res) => {
  //clear cookie if user logs out res.cookie('nameOfCookie',value set to nothing so emptystring,{expires in 0 secs so expires right away})
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully." });
});

//@description    Get single user profile
//@route          GET /api/users/profile
//@access         Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@description    Update user profile
//@route          PUT /api/users/profile
//@access         Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    //if changed then set to req.body.name OR stay the same user.name if not changed
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    //password is bcrypted so we have to do it this way
    if (req.body.password) {
      user.password = req.body.password;
    }

    //push all updated changes and save() it
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@description    Get all users
//@route          GET /api/users
//@access         Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get all user profiles");
});

//@description    Get user by ID
//@route          GET /api/users/:id
//@access         Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by ID");
});

//@description    Delete a user
//@route          DELETE /api/users/:id
//@access         Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//@description    Update a user
//@route          PUT /api/users/:id
//@access         Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

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
