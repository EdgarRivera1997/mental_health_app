import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

export default mongoose.model('Message', messageSchema);