import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://genpixelai.onrender.com", // Your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  credentials: true, // Necessary if cookies or credentials are being used
};
app.use(cors(corsOptions)); // Apply CORS settings

app.options("*", cors(corsOptions)); // Handle preflight requests

await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("API Working Fine");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
