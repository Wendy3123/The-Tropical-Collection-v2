import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

//compares wtv the user entered as password to the actual password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//.pre() allows you to do something before its 'save' in the database
//so .pre() will run before ==> we will hash password before it goes to database
userSchema.pre("save", async function (next) {
  //if we are just saving some user data but not dealing with the password it will just move on next()
  if (!this.isModified("password")) {
    next();
  }
  //else hash password etc
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
