import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema({
    title: {
       type: String,
        required: true,
        minlength: [5, '5 characters long at least']
    },
    body: {
        type: String,
        required: true,
        minlength: [10, '10 characters long at least']
    }
}, { timestamps: true} );

export default mongoose.model('Post', PostSchema);