import mongoose from "mongoose";

// Create a schema for the food items. For uploading the details to database.
const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;