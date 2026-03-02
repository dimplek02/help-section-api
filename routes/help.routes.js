const express = require("express");
const router = express.Router();

const helpController = require("../controllers/help.controller");

router.post("/", helpController.createHelp);
router.get("/", helpController.getAllHelp);
router.put("/:id", helpController.updateHelp);
router.delete("/:id", helpController.deleteHelp);

module.exports = router;