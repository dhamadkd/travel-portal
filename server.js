const express = require('express');
const cors = require('cors');

const db = require('./database');
const emailRouter = require('./routes/email.routes');

const ratelimiter = require('./middleware/ratelimiter');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(ratelimiter);

app.use('/email', emailRouter);

app.get('/test', (req, res) => {
    res.json({
        message: "Test successful"
    })
})

app.listen(PORT);