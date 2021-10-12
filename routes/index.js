const router = require('express').Router();

const candidateRouter = require('./candidate');
const userRouter = require('./user');

router.use('/candidate', candidateRouter);
router.use('/user', userRouter);

module.exports = router;