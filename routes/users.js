const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router
  .post("/register", usersController.register);
//   .get("/:id", productController.getDetailProduct)
//   .post("/", productController.createProduct)
//   .put("/:id", productController.updateProduct)
//   .delete("/:id", productController.deleteProduct);

module.exports = router;