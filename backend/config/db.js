import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://HariPasapuleti:hari9999@cluster0.6ip6jad.mongodb.net/foodies-hub').then(() => console.log("DB Connected"));
}