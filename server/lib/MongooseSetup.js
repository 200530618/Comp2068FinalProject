import dotenv from "dotenv";
import mongoose from "mongoose";

// This loads our .env and adds the variables to the environment
dotenv.config();

export default () => {
    /**
     * Setting up Mongoose
     */
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}.3xso2fa.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject`)
        .then(() => console.info("MongoDB Connected"))
        .catch(error => console.error(error));
};