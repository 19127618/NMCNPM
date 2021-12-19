const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = new Schema({
    user_id: {type: String, required: true},
    star: {
        voters: [String],
        scores: [Number]
    },
    create_time: {type: Date},
    reply: {type: String},
    content: {type: String},
});
module.exports = mongoose.model('Comments', Comment);