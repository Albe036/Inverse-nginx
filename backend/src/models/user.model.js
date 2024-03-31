import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    user_email: {
        type: String,
        required: true,
        trim: true,  
        unique: true
    },
    user_password: {
        type: String,
        required: true,
        trim: true,
    },
    user_email_confirmed: {
        type: Boolean,
        default: false
    },
    datein: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("User", user_schema)