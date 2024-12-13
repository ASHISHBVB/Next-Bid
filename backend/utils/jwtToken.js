import { AppConfig } from "../config/env.config.js";

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  const cookieExpiresIn = AppConfig.COOKIE_EXPIRE || 30;

  res
    .status(statusCode)
    .cookie("token", token, {
      maxAge: new Date(
        Date.now() + cookieExpiresIn * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
