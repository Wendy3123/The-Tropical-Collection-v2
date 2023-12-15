import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

// router.get("/", async (req, res) => {
//   getUsers();
// });
// router.post("/", async (req, res) => {
//  registerUser();
// });
router.route("/").post(registerUser).get(getUsers);

// router.post("/logout", async (req, res) => {
//   logoutUser();
// });
router.post("/logout", logoutUser);
router.post("/login", authUser);

// router.get("/profile", async (req, res) => {
//   getUserProfile();
// });
// router.put("/profile", async (req, res) => {
//  updateUserProfile();
// });
router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
