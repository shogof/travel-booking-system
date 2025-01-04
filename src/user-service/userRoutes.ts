import express from "express";

const router = express.Router();

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];

router.post("/", (rq, rs) => {
  const { name, email } = rq.body;
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  rs.status(201).send(newUser);
});

router.get("/", (rq, rs) => {
  rs.status(200).send(users);
});

router.get("/:id", (rq, rs) => {
  const userId = parseInt(rq.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    rs.status(404).send({ message: "User not found" });
  } else {
    rs.status(200).send(user);
  }
});

router.put("/:id", (rq, rs) => {
  const userId = parseInt(rq.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    rs.status(404).send({ message: "User not found" });
  } else {
    const { name, email } = rq.body;
    users[userIndex] = { id: userId, name, email };
    rs.status(200).send(users[userIndex]);
  }
});

router.delete("/:id", (rq, rs) => {
  const userId = parseInt(rq.params.id);
  users = users.filter((u) => u.id !== userId);
  rs.status(204).send();
});

export default router;
