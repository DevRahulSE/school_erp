const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/school_erp");
  console.log("Mongodb connected...");
};

module.exports = connectDB;
