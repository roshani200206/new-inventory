import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export async function verifyJWT(req, res, next) {
  try {
    const token =
      req.cookies?.accessToken

      console.log(token)
     

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token not provided" });
    }

    const decodedToken = jwt.verify(token, "fajsifnajnfalmnfjdsnfd"); // Replace with your env secret
    const { _id } = decodedToken;

    const user = await User.findById(_id).select("-password -refreshToken");

    if (!user) {
      return res.status(404).json({ message: "User not found or token is invalid" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
