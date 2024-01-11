require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const bill_routes = require("./routes/billr");

app.get("/", (req, res) => {
  res.send("Trying to connect major project");
});

//middlewares
app.use("/api/bill", bill_routes);
app.use("/hello", (req, res) => {
  res.send("Hello");
});
const suruwat = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

suruwat();
