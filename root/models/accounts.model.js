const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

const Account = new Schema({
    email: { type : String , required: true , unique: true},
    password: { type : String , required: true},
    phone: { type : String },
    role: {type: Boolean , default: 0}, //0: user, 1: admin
    fullname: { type : String },
    address: { type : String },
    block: { type : Boolean , default: 0}, //0: active, 1: blocked
    avatar: {type: String},
    coverImg: {type: String},
    followers: {type: [String]},
    following: {type: [String]},
    saved: {type: [string]},
    report: {
        id_reporter: {type: String},
        reason: {type: String},
    },
    bio: {
        type: string
    }
});

Account.plugin(uniqueValidator);

module.exports = mongoose.model('Accounts', Account);