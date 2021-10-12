const jobsModel = require('../../../models/jobs');

class JobsService {
    async getList(req, res) {
        try {
            const result = await jobsModel.findAll()
            return res.status(200).json({ status: true, message: 'List', result });
        } catch (error) {
            return res.status(500).json({ status: false, message: 'Interval Server Error' });
        }
    }
}
module.exports = new JobsService();