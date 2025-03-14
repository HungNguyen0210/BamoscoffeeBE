import jwt from "jsonwebtoken";

const generateToken = (res, id, username, role) => {
  const token = jwt.sign(
    { id, username, role }, // Thêm thông tin vào payload
    process.env.JWT_SECRET,
    { expiresIn: "7d" } // Thời gian token sống
  );

  // Gửi token dưới dạng cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;
