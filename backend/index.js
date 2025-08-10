import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import loopRouter from "./routes/loop.routes.js"
import storyRouter from "./routes/story.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket.js"
dotenv.config()

const port=process.env.PORT || 5000
const allowedOrigins = [
    "http://localhost:5173", 
    "http://localhost:5174", 
    "http://localhost:3000", 
    "https://social-media-swart-nu.vercel.app",
    "https://social-media-swart-nu.vercel.app/"
];

app.use(cors({
    origin: "*", // Temporarily allow all origins for debugging
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))
app.use(express.json())
app.use(cookieParser())

// Debug middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - Origin: ${req.get('Origin')}`);
    next();
})

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running', timestamp: new Date().toISOString() });
})

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/post",postRouter)
app.use("/api/loop",loopRouter)
app.use("/api/story",storyRouter)
app.use("/api/message",messageRouter)


server.listen(port , ()=>{
    connectDb()
    console.log("server started")
})

