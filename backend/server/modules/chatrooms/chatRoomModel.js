import mongoose, { Schema } from "mongoose";

const chatRoomSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('ChatRoom', chatRoomSchema);