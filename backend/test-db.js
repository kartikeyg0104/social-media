import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing MongoDB connection...');
console.log('MONGODB_URL exists:', !!process.env.MONGODB_URL);

try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ MongoDB connected successfully');
    process.exit(0);
} catch (error) {
    console.log('❌ MongoDB connection failed:', error.message);
    process.exit(1);
}
