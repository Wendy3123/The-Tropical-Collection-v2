import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //set JWT as HTTP-Only cookie (our cookie is named "jwt" from res.cookie('jwt',...))
  res.cookie("jwt", token, {
    httpOnly: true,
    //if not in development the https (secure) is true
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevent attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days in milliseconds
  });
};

export default generateToken;
