import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  id: { type: String },
  membership: { type: Boolean },
  mobile: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  church: {type: mongoose.Schema.Types.ObjectId, ref: 'churchs', required: true},
  avatar: { type: String },
  owner_user: {type: String, required: true},
  record_date: {type: Date, default: Date.now, required: true}
});

const customers = mongoose.model("customers", customerSchema);

export default customers;
