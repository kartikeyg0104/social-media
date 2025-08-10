import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("✅ Database connected successfully")
    } catch (error) {
        console.log("❌ Database connection failed:", error.message)
        console.log("⚠️ Server will continue running without database")
        console.log("📝 Please check your MongoDB connection string in .env file")
    }
}

export default connectDb