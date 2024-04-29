const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth-controller");
const uploadMiddleware = require("../Middleware/upload");
const { signupSchema, loginSchema } = require("../Validators/auth-Validators");
const validate = require("../Middleware/validate-zod");
const path = require("path");
const authMiddleware = require("../Middleware/auth-middleware");

router.route("/").get(authController.home);

router.route("/register").post(validate(signupSchema), authController.register);

router.route("/login").post(validate(loginSchema), authController.login);

router.route("/user").get(authMiddleware, authController.user);

// Set up a route for file uploads
router.post("/upload", uploadMiddleware.single("file"), (req, res) => {
  // Handle the uploaded file
  res.json({ message: "File uploaded successfully!" });
});

// router.get("/download", (req, res) => {
//   res
//     .status(200)
//     .download(path.join(__dirname, "1712139609418-Piyush_Resume[1].docx"));
// });
router.get("/download", (req, res) => {
  console.log(__dirname + "Resume[1].docx", "=============================");

  res.download(path.join(__dirname, "../uploads/Resume[1].docx"));
});

module.exports = router;
