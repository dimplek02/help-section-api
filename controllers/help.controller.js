const helpService = require("../services/help.service");

exports.createHelp = async (req, res) => {
  try {
    const result = await helpService.createHelp(req.body);
    res.status(result.status).json(result.response);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

exports.getAllHelp = async (req, res) => {
  try {
    const result = await helpService.getAllHelp(req.query.category);
    res.status(result.status).json(result.response);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
exports.getHelpById = async (req, res) => {
  try {
    const result = await helpService.getHelpById(req.params.id);
    res.status(result.status).json(result.response);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
exports.updateHelp = async (req, res) => {
  try {
    const result = await helpService.updateHelp(req.params.id, req.body);
    res.status(result.status).json(result.response);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

exports.deleteHelp = async (req, res) => {
  try {
    const result = await helpService.deleteHelp(req.params.id);
    res.status(result.status).json(result.response);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};