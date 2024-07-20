import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })

    try {
        await food.save();
        res.json({sucess: true, message: "Food Added"})
    } catch (error) {
        console.log(error)
        res.json({sucess: false, message: "Failed to add food"})
    }

}


// all food list 

// using asyncronous arrow function 
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({success: true, data: food})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Failed to add item"})
    }

}

// remove food item 
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({sucess: true, message: "Removed item"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Failed to remove item"})
    }
 }





export { addFood, listFood, removeFood }