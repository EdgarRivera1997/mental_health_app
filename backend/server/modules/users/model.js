import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [ true, "Can't be blank" ]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [ true, "Can't be blank" ]
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    physicalAddress: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, { timestamps: {createdAt: true, updatedAt: false} });

export default mongoose.model('User', UserSchema);