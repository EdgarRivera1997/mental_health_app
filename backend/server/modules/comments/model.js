import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    text : {
        type: String,
        required: true
    },
    postIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

export default mongoose.model('Comment', CommentSchema);