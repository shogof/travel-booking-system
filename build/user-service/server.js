import express from "express";
import userRoutes from "./userRoutes.js"; // Import user routes
const app = express();
const PORT = process.env.PORT || 3001; // User service runs on port 3001
app.use(express.json()); // Middleware to parse JSON bodies
// Use user routes for handling '/users' endpoint
app.use("/users", userRoutes);
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
