import User from "../modules/User.js";
import bcrypt from "bcryptjs";
import genToken from "../utile/token.js";
export const Signup = async (req, res) => {
  console.log(req.body);
  try {
    const { fullname, email, password, mobile, role } = req.body;
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User Already Exists. Please Sign In" });
    }
    // Validations
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    if (mobile.length < 11) {
      return res
        .status(400)
        .json({ message: "Mobile number must be at least 11 digits." });
    }

    // Hash Password
    const hashpassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      fullname,
      email,
      mobile,
      role,
      password: hashpassword,
    });

    const token = await genToken(user._id);
    return res
      .status(201)
      .json({ message: "User created successfully!", user, token });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
// export default Signup;
// api for signin
export const Signin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate token
    const token = await genToken(user._id);

    return res.status(200).json({
      message: "Signin successful!",
      user,
      token,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
