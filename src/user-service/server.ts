const express = require('express');
const userRoutes =require('./userRoutes.js')

const app = express();

app.use(express.json());
app.use('/user' , userRoutes)

const port = process.env.PORT || 3001;
app.listen(port, console.log(`user Server is run on ${port}`))
