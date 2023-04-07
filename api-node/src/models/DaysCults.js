import mongoose from 'mongoose';

const dayCultSchema = new mongoose.Schema(
    {
        id: {type: String},
        day: {type: Number, required: true},
        week_day: {type: String, required: true},
        date: {type: Date, required: true},
        name: {type: mongoose.Schema.Types.ObjectId, ref: 'customers', required: true},
        type_cult: {type: String, required: true},
        extra_cult: {type: String, required: true},
        owner_user: {type: String, required: true},
        record_date: {type: Date, default: Date.now, required: true}
    }
);

const daysCults = mongoose.model('dayCult', dayCultSchema);

export default daysCults;