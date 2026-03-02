const db = require("../config/db");

const allowedCategories = [
  "contact",
  "business_hours",
  "address",
  "faq",
  "user_guide",
  "bug_report"
];

// CREATE
exports.createHelp = (data) => {
  return new Promise((resolve, reject) => {
    const { category, title, sub_title, content } = data;

    // Validate category
    if (!allowedCategories.includes(category)) {
      return resolve({
        status: 400,
        response: {
          status: "error",
          message: "Invalid category"
        }
      });
    }

    if (!content) {
      return resolve({
        status: 400,
        response: {
          status: "error",
          message: "Content is required"
        }
      });
    }

    const sql = `
      INSERT INTO help_contents (category, title, sub_title, content)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [category, title, sub_title, content], (err, result) => {
      if (err) return reject(err);

      resolve({
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
      });
    });
  });
};


// GET ALL (with optional category filter)
exports.getAllHelp = (category) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM help_contents";

    if (category) {
      sql += " WHERE category = ?";
      db.query(sql, [category], (err, results) => {
        if (err) return reject(err);

        resolve({
          status: "success",
          results: results.length,
          data: results
        });
      });
    } else {
      db.query(sql, (err, results) => {
        if (err) return reject(err);

        resolve({
          status: "success",
          results: results.length,
          data: results
        });
      });
    }
  });
};


// UPDATE
exports.updateHelp = (id, data) => {
  return new Promise((resolve, reject) => {
    const { title, sub_title, content } = data;

    const sql = `
      UPDATE help_contents
      SET title = ?, sub_title = ?, content = ?
      WHERE id = ?
    `;

    db.query(sql, [title, sub_title, content, id], (err, result) => {
      if (err) return reject(err);

      if (result.affectedRows === 0) {
        return resolve({
          status: 404,
          response: {
            status: "error",
            message: "Help item not found"
          }
        });
      }

      resolve({
        status: 200,
        response: {
          status: "success",
          message: "Updated successfully"
        }
      });
    });
  });
};


// DELETE
exports.deleteHelp = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM help_contents WHERE id = ?";

    db.query(sql, [id], (err, result) => {
      if (err) return reject(err);

      if (result.affectedRows === 0) {
        return resolve({
          status: 404,
          response: {
            status: "error",
            message: "Help item not found"
          }
        });
      }

      resolve({
        status: 200,
        response: {
          status: "success",
          message: "Deleted successfully"
        }
      });
    });
  });
};