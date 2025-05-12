import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
dotenv.config()
connectDB()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test', testRoutes)
app.use('/api/v1/auth', authRoutes)

const port = process.env.PORT || 8080

app.listen(port , () => {
    console.log(`Node Server is running In ${process.env.DEV_MODE} on port ${port}`)
})