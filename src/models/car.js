const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    servies: {
        type: Map,
        of: String,
    }
});

module.exports = mongoose.model('Car', carSchema);
