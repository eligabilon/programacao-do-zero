import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  status: { type: Boolean, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const users = mongoose.model("users", userSchema);

export default users;
