import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  status: { type: Boolean, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "ORG", required: true },
  owner_user: {type: String, required: true},
  record_date: {type: Date, default: Date.now, required: true}
});

const users = mongoose.model("users", userSchema);

export default users;
