const express = require('express');

const db = require('./database');
const emailRouter = require('./routes/email.routes');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/email', emailRouter);

// app.post('/sendemail', (req, res) => {

// })

app.listen(PORT);