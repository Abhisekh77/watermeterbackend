const Bill = require("../models/billm");

const getAllUsers = async (req, res) => {
  const myData = await Bill.find(req.query);
  res.status(200).json({ myData });
};

const getAllUsersTesting = async (req, res) => {
  res.status(200).json({ msg: " I am getting all users data here" });
};

module.exports = { getAllUsers, getAllUsersTesting };
