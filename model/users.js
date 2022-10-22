const Pool = require("../config/db");

const insert = (data) => {
  const { id, email, password, fullname, role } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO users(id, email, password, fullname, role) VALUES('${id}', '${email}', '${password}', '${fullname}', '${role}')`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

// Find Email
const findEmail = (email) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT email FROM users WHERE email='${email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { findEmail, insert };
