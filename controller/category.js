const {
  selectAll,
  select,
  insert,
  update,
  remove,
  findId,
  countData,
} = require("../model/category");
const commonHelper = require("../helper/common");

const categoryController = {
  getAllCategory: async (req, res) => {
    const result = await selectAll();
    res.json(result.rows);
  },
  getDetailCategory: async (req, res) => {
    const id = Number(req.params.id);
    const { rowCount } = await findId(id);
    if (!rowCount) {
      commonHelper.response(res, [], 404, "category ID not found!");
    }
    select(id)
      .then((result) =>
        commonHelper.response(res, result.rows, 200, "get data success")
      )
      .catch((error) =>
        commonHelper.response(res, error.rows, 404, "error not found")
      );
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    const {
      rows: [count],
    } = await countData();
    const id = Number(count.count) + 1;
    insert(id, name)
      .then((result) =>
        commonHelper.response(
          res,
          result.rowCount,
          201,
          "data category created"
        )
      )
      .catch((error) =>
        commonHelper.response(res, error.rows, 500, "internal server error")
      );
  },
  updateCategory: async (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    const { rowCount } = await findId(id);
    if (!rowCount) {
      return commonHelper.response(res, [], 404, "category ID not found");
    }
    update(id, name)
      .then((result) =>
        commonHelper.response(res, result.rows, 200, "data category updated")
      )
      .catch((error) =>
        commonHelper.response(res, error.rows, 500, "internal server error")
      );
  },

  deleteCategory: async (req, res) => {
    const id = Number(req.params.id);
    const { rowCount } = await findId(id);
    if (!rowCount) {
      return commonHelper.response(res, [], 404, "category ID not found")
    }
    remove(id)
      .then((result) =>
        commonHelper.response(res, result.rows, 200, "category data deleted")
      )
      .catch((error) =>
        commonHelper.response(res, error.rows, 500, "internal server error")
      );
  },
};

module.exports = categoryController;
