import mongoose, { Schema } from "mongoose";

const CarSchema = new Schema({
    name: {
        type: String,
        required: [true, "You must provide a name for the car"],
        minlength: [2, "Please provide at least 2 characters for the name"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    year: {
        type: Number,
        required: [true, "You must provide the year of the car"]
    },
    color: {
        type: String,
        required: [true, "You must provide the color of the car"],
        minlength: [3, "Please provide at least 3 characters for the color"],
        maxlength: [20, "Color cannot exceed 20 characters"]
    },
    model: {
        type: String,
        required: [true, "You must provide the model of the car"],
        minlength: [2, "Please provide at least 2 characters for the model"],
        maxlength: [50, "Model cannot exceed 50 characters"]
    }
}, { timestamps: true });

export default mongoose.model("Car", CarSchema);
