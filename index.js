require('dotenv').config()
const express = require("express");
const createError = require('http-errors');
const app = express();
const mainRouter = require("./routes/index");
const cors = require('cors');
const helmet = require("helmet");
// const productRouter = require("./routes/product")

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", mainRouter);

// app.all("*", (req, res, next) => {
//   next(new createError.NotFound())
// });

// app.use((err, req, res, next) => {
//   const messageError = err.message || "internal server error"
//   const statusCode = err.status || 500

//   res.status(statusCode).json({
//     message: messageError
//   })
// });

const {HOST, PORT} = process.env;

app.listen(PORT, () => {
  console.log(`${HOST}${PORT}`);
});
