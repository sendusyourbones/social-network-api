require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

mongoose.connect('mongodb://localhost/socialNetworkDb')
    .then(() => {
        console.log('Connected to the social network db');
    })
    .catch(error => console.log(error));

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
