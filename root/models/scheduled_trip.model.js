const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Scheduled = new Schema({
    user_id:{type: String},
    date: {type: Date},
    schedule: {type: [
        {
            time: Date,
            content: String,
        }
    ]},
    share: {type:[String]}, //arr user id
});
module.exports = mongoose.model('Scheduled', Scheduled);