import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from "cors";

const app = express();

const corsOptions = {   
    credentials: true,    
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

dotenv.config();



app.use("/", authRoutes);

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});