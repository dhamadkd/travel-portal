const express = require('express');

const emailController = require('../controllers/email.controller');

const emailRouter = express.Router();

// emailRouter.use((req, res, next) => {
//   console.log('ip address:', req.ip);
//   next();
// });
emailRouter.post('/send', emailController.main);
// friendsRouter.get('/', friendsController.getFriends);
// friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = emailRouter;