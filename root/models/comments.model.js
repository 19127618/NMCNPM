import mongoose from 'mongoose';

const {Schema} = mongoose;


const Comment = new Schema({
    blog_id: {type: String, required: true},
    user_id: {type: String},
    star: {
        voters: [String],
        scores: [Number]
    },
    create_time: {type: Date},
    reply: {type: String},
    content: {type: String},
});
export default mongoose.model('Comments', Comment);