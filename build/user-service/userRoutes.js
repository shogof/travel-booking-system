import express from "express";
const router = express.Router();
// Mock database (in-memory storage)
let users = [];
// Route to create a new user
router.post("/", (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1, // Simple ID generation
        name,
        email,
    };
    users.push(newUser); // Add user to the mock database
    res.status(201).send(newUser); // Respond with the created user
});
// Route to get all users
router.get("/", (req, res) => {
    res.status(200).send(users); // Respond with the list of users
});
// Route to get a user by ID
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
        res.status(404).send({ message: "User not found" });
    }
    else {
        res.status(200).send(user); // Respond with the found user
    }
});
// // Route to update a user
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
        res.status(404).send({ message: "User not found" });
    }
    else {
        const { name, email } = req.body;
        users[userIndex] = { id: userId, name, email }; // Update user
        res.status(200).send(users[userIndex]); // Respond with the updated user
    }
});
// Route to delete a user
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId); // Remove user
    res.status(204).send(); // Respond with no content
});
export default router;
