import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL)
        console.log('MongoDB Connected: ', conn.connection.host)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB