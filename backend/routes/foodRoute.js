import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine 
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`) // cb: A callback function to specify the filename.
    }
})
// In this case, the filename is set to the current timestamp followed by the original file name `(${Date.now()}${file.originalname})`. This helps to avoid filename conflicts.

// The upload variable is an instance of multer with the configured storage engine. It is used as middleware to handle file uploads in Express routes.
const upload = multer({storage: storage}) // When a file is uploaded, it will be saved in the uploads folder.

foodRouter.post("/add", upload.single("image"), addFood)
// The upload.single() method is used to upload a single file. The first argument is the name

foodRouter.get("/list", listFood)
// Indicates path/list executes path/listFood 
foodRouter.post("/remove", removeFood)






export default foodRouter