var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ShorturlSchema = new Schema({
    shortened_url: {
        type: String,
        required: true
    },
    short_id: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Shorturl", ShorturlSchema);