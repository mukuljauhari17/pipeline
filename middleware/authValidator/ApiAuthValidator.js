const jwt = require('jsonwebtoken');
const commonConfig = require('../../config/common.config');

class ApiAuthValidator {
    /** ***** Api auth validator: Method to validate api key ******/
    validateApiKey(req, res, next) {
        if (!req.headers['x-api-key']) {
            return res.status(403).send({ 'status': false, 'message': 'No api key found in request' });
        } else {
            if (!req.headers['platform']) {
                return res.status(403).send({ 'status': false, 'message': 'No platform found in request' });
            } else {
                const platform = req.headers['platform'].toLowerCase();
                let key;
                switch (platform) {
                    case 'web':
                        key = commonConfig.WEB_API_KEY;
                        break;
                }
                if (req.headers['x-api-key'] == key) {
                    next();
                } else {
                    return res.status(401).send({ 'status': false, 'message': 'Invalid api key or platform' });
                }
            }
        }
    }
}

module.exports = new ApiAuthValidator();