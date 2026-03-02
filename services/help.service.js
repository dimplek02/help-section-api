const helpModel = require("../models/help.model");

const allowedCategories = [
  "contact",
  "business_hours",
  "address",
  "faq",
  "user_guide",
  "bug_report"
];

/* CREATE */
exports.createHelp = async (data) => {
  const { category, title, sub_title, content } = data;

  if (!category || !content) {
    return {
      status: 400,
      response: {
        status: "error",
        message: "Category and content are required"
      }
    };
  }

  if (!allowedCategories.includes(category)) {
    return {
      status: 400,
      response: {
        status: "error",
        message: "Invalid category"
      }
    };
  }

  const result = await helpModel.insertHelp(
    category,
    title,
    sub_title,
    content
  );

  return {
    status: 201,
    response: {
      status: "success",
      data: {
        id: result.insertId,
        category,
        title,
        sub_title,
        content
      }
    }
  };
};

/* GET ALL */
exports.getAllHelp = async (category) => {

  if (category && !allowedCategories.includes(category)) {
    return {
      status: 400,
      response: {
        status: "error",
        message: "Invalid category"
      }
    };
  }

  const results = category
    ? await helpModel.getByCategory(category)
    : await helpModel.getAll();

  return {
    status: 200,
    response: {
      status: "success",
      results: results.length,
      data: results
    }
  };
};

/* GET BY ID */
exports.getHelpById = async (id) => {
  const results = await helpModel.getById(id);

  if (results.length === 0) {
    return {
      status: 404,
      response: {
        status: "error",
        message: "Help item not found"
      }
    };
  }

  return {
    status: 200,
    response: {
      status: "success",
      data: results[0]
    }
  };
};

/* UPDATE */
exports.updateHelp = async (id, data) => {
  const { title, sub_title, content } = data;

  const result = await helpModel.updateById(
    id,
    title,
    sub_title,
    content
  );

  if (result.affectedRows === 0) {
    return {
      status: 404,
      response: {
        status: "error",
        message: "Help item not found"
      }
    };
  }

  return {
    status: 200,
    response: {
      status: "success",
      message: "Updated successfully"
    }
  };
};

/* DELETE */
exports.deleteHelp = async (id) => {
  const result = await helpModel.deleteById(id);

  if (result.affectedRows === 0) {
    return {
      status: 404,
      response: {
        status: "error",
        message: "Help item not found"
      }
    };
  }

  return {
    status: 200,
    response: {
      status: "success",
      message: "Deleted successfully"
    }
  };
};