import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "Token not found" });
    }
    const decodedToken = jwt.verify(token.prcess.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(400).json({ message: "Toekn not verify" });
    }
    console.log(decodedToken);
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    return res.status(500).json({ message: "is auth error " });
  }
};
