const express = require("express");
const adminController = require("../Controllers/admin-controller");
const authMiddleware = require("../Middleware/auth-middleware");
const adminMiddleware = require("../Middleware/admin-middleware");

const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route("/users/:id").get(authMiddleware, adminController.getUsersById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminController.deleteContactsById);

module.exports = router;
