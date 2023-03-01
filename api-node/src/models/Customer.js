import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  id: { type: String },
  membership: { type: Boolean },
  mobile: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  avatar: { type: String },
});

const customers = mongoose.model("customers", customerSchema);

export default customers;
