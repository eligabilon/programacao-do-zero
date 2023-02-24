import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://gabilon:gabilon@cluster0.bf5p629.mongodb.net/?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;