import express from "express";
import userRoutes from "./userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`user ervice is run on port ${PORT}`);
});
