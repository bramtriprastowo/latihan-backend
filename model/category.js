const Pool = require("../config/db");

//CRUD category
const selectAll = () => {
  return Pool.query(`SELECT * FROM category`);
};
const select = (id) => {
  return Pool.query(`SELECT * FROM category WHERE id=${id}`);
};
const insert = (id, name) => {
  return Pool.query(`INSERT INTO category(id,name) VALUES('${id}','${name}')`);
};
const update = (id, name) => {
  return Pool.query(`UPDATE category SET name='${name}' WHERE id=${id}`);
};
const remove = (id) => {
  return Pool.query(`DELETE FROM category WHERE id=${id}`);
};

// Count Data and Select ID
const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM category");
};
const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM category WHERE id=${id}`, (error, result) => {
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
