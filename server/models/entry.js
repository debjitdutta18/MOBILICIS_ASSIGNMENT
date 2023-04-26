const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String,
})

entrySchema.index({ city: 1 });

const Entry = new mongoose.model("Entry", entrySchema);
module.exports = Entry;




