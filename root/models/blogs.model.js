// const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

const {Schema} = mongoose;

const Blog_Place = new Schema({
    blog_id: { type : String },
    user_id: {type: String, default: "0000"},
    price: { type : Number },
    priceUnit: { type: String},
    image: { type : Array },
    title: {type: String},
    content: {type: String},
    create_time: {type: Date},
    type: {type: String},
    vehicle: {type: String},
    like: {type: Number},
    active: {type: Boolean, default: 1}, //1: active
    address: {type: String},
    approve: {type: Number, default: 0}, //0: chưa được duyệt, 1 là đã được duyệt, -1 là bị từ chối.
    comment: {type: [String]},
    number_of_save: {typeKey: Number},
    star: {
        voters: [String],
        scores: [Number]
    },
    report: {
        id_reporter: {type: String},
        reason: {type: String},
    },
    sharers: { type: [String]},

    
    slug: { type: String, slug: 'blog_id', unique: true},
},{timestamps: true});

// Add plugin
Blog_Place.plugin(slug);

//collection name, with SINGULAR NOUN and name on the database will be the PLURAL NOUN
// module.exports = mongoose.model('Blogs', Blog);

export default mongoose.model('Blog_Place', Blog_Place);