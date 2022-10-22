const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const { findEmail, insert } = require("../model/users");
const commonHelper = require("../helper/common")

const usersController = {
  register: async (req, res) => {
    const { email, password, fullname } = req.body;

    //Check if email is already registered
    const { rowCount } = await findEmail(email);
    if (rowCount) {
      return commonHelper.response(res, [], 409, "email is already registered");
    }

    //Generate UUID, hash password, and insert new user
    const id = uuidv4();
    const passwordHash = bcrypt.hashSync(password, 10);
    const data = {
      id,
      email,
      password: passwordHash,
      fullname,
      role: "user",
    }; 
    insert(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "user created")
      )
      .catch((error) =>
        commonHelper.response(res, error.rows, 500, "internal server error")
      );
  },
};

module.exports = usersController;
