const { UserService } = require('../../../services');

class UserController {
    async getList(req, res, next) {
        try {
            await UserService.getList(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = new UserController();