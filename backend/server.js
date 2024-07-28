import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


// App config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint 
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads')) // Takes the image id and generates the image at link (http://127.0.0.1:4000/images/image_id) (sample image id - 1721464145543food_8.png).
// mountes the images folder to uploads folder. (We can access the uploads folder using this /images/filename)
app.use("/api/user", userRouter )


app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});

// My database link
// mongodb+srv://HariPasapuleti:hari9999@cluster0.6ip6jad.mongodb.net/?
