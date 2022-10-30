import mongoose from "mongoose";

mongoose.connect('mongodb+srv://gabilon:gabilon@cluster0.bf5p629.mongodb.net/gabilon');

let db = mongoose.connection;

export default db;