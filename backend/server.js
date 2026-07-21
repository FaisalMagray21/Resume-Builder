import express from "express";
import cors from "cors";
import "dotenv/config";
import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { connectDB } from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumerouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is live");
});

app.use('/api/users', userRouter);
app.use('/api/resumes', resumerouter);
app.use('/api/ai', aiRouter);

// Local development ke liye
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;