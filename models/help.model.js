const db = require("../config/db");

/* INSERT */
exports.insertHelp = (category, title, sub_title, content) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO help_contents (category, title, sub_title, content)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [category, title, sub_title, content], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/* SELECT ALL */
exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM help_contents", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

/* SELECT BY CATEGORY */
exports.getByCategory = (category) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM help_contents WHERE category = ?";
    db.query(sql, [category], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

/* SELECT BY ID */
exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM help_contents WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

/* UPDATE */
exports.updateById = (id, title, sub_title, content) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE help_contents
      SET title = ?, sub_title = ?, content = ?
      WHERE id = ?
    `;
    db.query(sql, [title, sub_title, content, id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/* DELETE */
exports.deleteById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM help_contents WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};