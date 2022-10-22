const Pool = require("../config/db");

// CRUD Product
const selectAll = () => {
  return Pool.query(`SELECT * FROM product`);
};
const select = (id) => {
  return Pool.query(`SELECT * FROM product WHERE id=${id}`);
};
const insert = (id, name, stock, price) => {
  return Pool.query(
    `INSERT INTO product(id, name, stock, price) VALUES(${id} ,'${name}', '${stock}', '${price}')`
  );
};
const update = (id, name) => {
  return Pool.query(`UPDATE product SET name='${name}' WHERE id=${id}`);
};
const remove = (id) => {
  return Pool.query(`DELETE FROM product WHERE id=${id};`);
};

// Count Data and Select ID
const countData = () => {
  return Pool.query(`SELECT COUNT(*) FROM product`);
};
const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM product WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  remove,
  countData,
  findId,
};
