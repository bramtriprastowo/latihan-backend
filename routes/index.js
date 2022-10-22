const express = require("express");
const router = express.Router();
const productRouter = require("./products");
const categoryRouter = require("./category");
const usersRouter = require("./users");

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/users", usersRouter);

module.exports = router;
