import mongoose from "mongoose";
import { format_console } from "../utils/formatConsole.js";

const DB_URI = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/${process.env.MONGODB_NAMEBD}?authSource=admin`;

async function db_connect(){
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        format_console(["green", "bold"], `::Database connected:: --> ${process.env.MONGODB_NAMEBD}`);
    } catch (error) {
        format_console(["red", "bold"], "::Database connection error::");
        format_console(["red", "bold"], "::Database connection error::");
        format_console(["red", "bold"], "::Database connection error::");
        console.log(error);
    }
}

export default db_connect;