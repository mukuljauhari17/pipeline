const router = require('express').Router();

const candidateRouter = require('./candidate');
const userRouter = require('./user');
const candidateProfileRouter = require('./candidate_profile');

router.use('/candidate', candidateRouter);
router.use('/user', userRouter);
router.use('/candidate_profile', candidateProfileRouter);

module.exports = router;