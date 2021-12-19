const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Noti = new Schema({
    content: {type: String},
    link: {type: String},
    time: {type: Date},
    seen: {type: Boolean, default: 0}, //0: not seen
    user_id: {type: String},
    type: {type: String},
});
module.exports = mongoose.model('Notis', Noti);