const decode = require("jwt-decode");
const adminMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("=========================================");
  if (!token) {
    console.log(token);

    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();
  const data = decode.jwtDecode(jwtToken);

  if (data.isAdmin) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Only admins can access this route" });
  }
};

module.exports = adminMiddleware;
