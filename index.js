// const express = require("express");
// const app = express();

// app.use(express.json());

// let helpData = [];
// let idCounter = 1;

// // POST
// app.post("/api/help", (req, res) => {
//   const { category, title, sub_title, content } = req.body;

//   if (!category || !content) {
//     return res.status(400).json({
//       status: "error",
//       message: "category and content are required"
//     });
//   }

//   const newHelp = {
//     id: idCounter++,
//     category,
//     title: title || null,
//     sub_title: sub_title || null,
//     content,
//     createdAt: new Date().toISOString()
//   };

//   helpData.push(newHelp);

//   res.status(201).json({
//     status: "success",
//     data: newHelp
//   });
// });

// // GET
// app.get("/api/help", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     results: helpData.length,
//     data: helpData
//   });
// });

// // PUT
// app.put("/api/help/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const helpItem = helpData.find(item => item.id === id);

//   if (!helpItem) {
//     return res.status(404).json({
//       status: "error",
//       message: "Help item not found"
//     });
//   }

//   const { category, title, sub_title, content } = req.body;

//   if (category) helpItem.category = category;
//   if (title) helpItem.title = title;
//   if (sub_title) helpItem.sub_title = sub_title;
//   if (content) helpItem.content = content;

//   res.json({
//     status: "success",
//     data: helpItem
//   });
// });
// // DELETE: Remove Help Data by ID
// app.delete("/api/help/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   const index = helpData.findIndex(item => item.id === id);

//   if (index === -1) {
//     return res.status(404).json({
//       status: "error",
//       message: "Help item not found"
//     });
//   }

//   helpData.splice(index, 1);

//   res.json({
//     status: "success",
//     message: "Help item deleted successfully"
//   });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});