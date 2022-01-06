// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
import mongoose from 'mongoose';
import uniqueValidator from'mongoose-unique-validator';

const {Schema} = mongoose;


const account = new Schema({
    id_user: {type: String, required: true},
    email: { type : String , required: true , unique: true},
    password: { type : String , required: true},
    phone: { type : String },
    role: {type: Boolean , default: false}, //0: user, 1: admin
    fullname: { type : String },
    address: { type : String },
    block: { type : Boolean , default: true}, //0: active, 1: blocked
    avatar: {type: String},
    coverImg: {type: String},
    followers: {type: [String]},
    following: {type: [String]},
    saved: {type: [String]},
    report: {
        id_reporter: {type: String},
        reason: {type: String},
    },
    bio: {
        type: String
    }
});
account.plugin(uniqueValidator);

// export default{
//     Account
// }

// module.exports = mongoose.model('Accounts', Account);

export default mongoose.model('accounts', account);
