const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../../controller');

userRouter.get('/', UserController.getList)

module.exports = userRouter;