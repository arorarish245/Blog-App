import mongoose from "mongoose";
export const ConnectDB=async () =>{
    await mongoose.connect('mongodb+srv://rishitaarora245:atlas2455@cluster0.zrllfew.mongodb.net/blog-app')
    console.log("connected");
}