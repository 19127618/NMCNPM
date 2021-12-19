const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Chat = new Schema({
    user1_id: {type: String, required: true},
    user2_id: {type: String, required: true},
    user1_content: {type: String},
    user2_content: {type: String},
    chat_title: {type: String},
    sent_time: {type: String},

});
module.exports = mongoose.model('Chats', Chat);