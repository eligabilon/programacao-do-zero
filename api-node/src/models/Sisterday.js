import mongoose from "mongoose";

const sisterdaySchema = new mongoose.Schema({
  id: { type: String },
  firstname: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
  day: { type: String, required: true },
  weekday: { type: String, required: true },
  date: { type: String, required: true },
  hours: { type: String, required: true},
  realeasedate: { type: String, required: true },
  church: {type: mongoose.Schema.Types.ObjectId, ref: 'churchs', required: true},
  typecult: { type: String },
  extracult: { type: Boolean },
});

const sisterday = mongoose.model("sisterday", sisterdaySchema);

export default customers;
