import mongoose from 'mongoose';

const churchSchema = new mongoose.Schema(
    {
        id: {type: String},
        city: {type: String, required: true},
        common: {type: String, required: true, unique: true},
        record_date: {type: Date, default: Date.now, required: true}
    }
);

const churchs = mongoose.model('churchs', churchSchema);

export default churchs;