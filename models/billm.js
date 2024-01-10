const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  PreviousUnit: {
    type: Number,
    required: true,
  },
  CurrentUnit: {
    type: Number,
    required: true,
  },
  TotalUnit: {
    type: Number,
    required: true,
  },
  TotalPrice: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Bill", billSchema);
