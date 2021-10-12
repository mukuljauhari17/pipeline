const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('dotenv').config();
const commonConfig = require('./config/common.config');
const { ApiAuthValidator } = require('./middleware/authValidator');

const app = express();
const PORT = process.env.PORT || 5000;

// Bodyparser Middleware
app.use(cors());
app.use(express.json())
app.use(express.json({ limit: '50mb' }));


// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//Declare Routes here
const routes = require('./routes')
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to DK Masterbox Pipeline api.' });
});

app.use('/api/' + commonConfig.API_VERSION, ApiAuthValidator.validateApiKey, routes);

const handleError = require('./helpers/errorHandler');

app.use((req, res, next) => {
    const error = new Error("Resource not found");
    next(error);
})

app.use((error, req, res, next) => {
    handleError(error, res);
})

app.listen(PORT, () =>
    console.log(`API server listening on http://localhost:${PORT}`)
)