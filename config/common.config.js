const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    BASE_URL: process.env.BASE_URL,
    API_VERSION: process.env.API_VERSION,

    // API_KEY: process.env.API_KEY,

    WEB_API_KEY: process.env.WEB_API_KEY,

    SERVER: process.env.SERVER,
};