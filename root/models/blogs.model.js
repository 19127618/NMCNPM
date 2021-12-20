const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Blog_Place = new Schema({
    blog_id: { type : String , required: true },
    price: { type : Number },
    image: { type : Array },
    header: {type: String},
    content: {type: String},
    create_time: {type: Date},
    type: {type: string},
    vehicle: {type: string},
    like: {type: Number},
    active: {type: Boolean, default: 1}, //1: active
    address: {type: String},
    approve: {type: Boolean, default: 0},
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

    
    slug: { type: String, slug: 'name', unique: true},
},{timestamps: true});

// Add plugin
mongoose.plugin(slug);

//collection name, with SINGULAR NOUN and name on the database will be the PLURAL NOUN
module.exports = mongoose.model('Blogs', Blog);