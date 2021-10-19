const userModel = require('../../../models/user');

class UserService {
    async getList(req, res) {
        try {
            const result = await userModel.findAll({
                where: { status: 1, enable: 1 },
                order: [['orderNo', 'ASC']],
                attributes: { exclude: ['userId', 'status', 'enable', 'createdAt', 'updatedAt'] },
            })
            return res.status(200).json({ status: true, message: 'List', result });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }
}
module.exports = new UserService();