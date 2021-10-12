const { JobsService } = require('../../../services');

class JobsController {
    async getList(req, res, next) {
        try {
            await JobsService.getList(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = new JobsController();