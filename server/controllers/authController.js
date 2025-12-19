import User from "../modules/User.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/token.js";
import { sendOtpMail } from "../utils/mail.js";
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

export const SignOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Signout succesfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Signout error ", err });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist." });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.restotp = otp;
    user.otpExperies = Date.now() + 5 * 60 * 1000;
    user.isOtpVerified = false;
    await user.save();
    await sendOtpMail(email.otp);
    return res.status(200).json({ message: "otp send successfully!" });
  } catch (eror) {
   return res.status(500).json({ message: `send otp error ${eror}` });
  }
};
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.resetOtp || !user.otpExpires) {
      return res.status(400).json({ message: "OTP not requested" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    if (user.resetOtp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.isOtpVerified = true;
    user.resetOtp = undefined;
    user.otpExpires = undefined;

    await user.save();

    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Verify OTP error: ${error.message}` });
  }
};
export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.isOtpVerified) {
    return res.status(400).json({ message: "OTP verification required" });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.isOtpVerified = false;

  await user.save();

  res.json({ message: "Password reset successful" });
};
