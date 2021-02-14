require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected database');
});

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('server up!'));