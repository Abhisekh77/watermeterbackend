require("dotenv").config();

const connectDB = require("./db/connect");
const Bill = require("./models/billm");

const BillJson = require("./bill.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Bill.create(BillJson);
    console.log("Data added successfully");
  } catch (error) {
    console.log("error");
  }
};

start();
