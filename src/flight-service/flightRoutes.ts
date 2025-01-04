import express from "express";

const router = express.Router();

interface Flight {
  id: number;
  origin: string;
  destination: string;
  price: number;
}

let flights: Flight[] = [];

router.post("/", (rq, rs) => {
  const { origin, destination, price } = rq.body;
  const newFlight: Flight = {
    id: flights.length + 1,
    origin,
    destination,
    price,
  };
  flights.push(newFlight);
  rs.status(201).send(newFlight);
});

router.get("/", (rq, rs) => {
  rs.status(200).send(flights);
});

router.get("/:id", (rq, rs) => {
  const flightId = parseInt(rq.params.id);
  const flight = flights.find((f) => f.id === flightId);
  if (!flight) {
    rs.status(404).send({ message: "Flight not found" });
  } else {
    rs.status(200).send(flight);
  }
});

router.delete("/:id", (rq, rs) => {
  const flightId = parseInt(rq.params.id);
  flights = flights.filter((f) => f.id !== flightId);
  rs.status(204).send();
});

export default router;
