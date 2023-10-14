const express = require('express');

const db = require('./database');
const emailRouter = require('./routes/email.routes');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/email', emailRouter);

app.get('/test', (req, res) => {
    res.json({
        message: "Test successful"
    })
})

app.listen(PORT);