import express from 'express';
import flightRoutes from './flightRoutes.js'; 

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/flights', flightRoutes);

app.listen(PORT, () => {
    console.log(`Flight Service is running on port ${PORT}`);
});
