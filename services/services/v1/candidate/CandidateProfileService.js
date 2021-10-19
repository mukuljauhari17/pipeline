const candidateModel = require('../../../models/candidate');
const candidateDocModel = require('../../../models/candidate_doc');
const bvModel = require('../../../models/backend_values');
const commentModel = require('../../../models/process_comments');
const userModel = require('../../../models/user');
const jobModel = require('../../../models/jobs');
const Sequelize = require('sequelize');

class CandidateProfileService {
    async valuesById(req, res) {
        try {
            const result = await bvModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at', 'created_by', 'updated_by', 'status', 'heading_id', 'ip'] },
                where: { heading_id: req.params.id, status: 1},
                order: [
                    ['order_no', 'ASC'],
                ],
            })
            return res.status(200).json({ status: true, message: 'List of values', 'count': result.length, result });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async basicProfile(req, res) {
        try {
            const result = await candidateModel.findAll({
                include: [
                    {
                        model: userModel,
                        as: 'rec_detail',
                        attributes: { exclude: ['createdAt', 'updatedAt'] },
                    },
                ],
                where: {canId: req.params.id}
            })
            return res.status(200).json({ status: true, message: 'Details of Candidate', result });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

	async bulkDetele(req, res) {
		try {
			const payload = req.body;

			for(let i=0; i< payload.ids.length; i++){
				await this.updateStatus(payload.ids[i], payload.status);
			}
			
			return res.status(200).json({status: true, message: 'Successful'});
			
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

	async updateStatus(id, status) {
		try {
			await candidateModel.update({status: status}, {where: {canId: id}});
		} catch (error) {
			console.log(error)
		}
	}

    async documentDetails(req, res) {
		try {
			const result = await candidateDocModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedBy', 'status', 'canId'] },
                where: {canId: req.params.id}
            });
            return res.status(200).json({ status: true, message: 'Details of Candidate Documents', result });
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

    async jobDetails(req, res) {
		try {
			const result = await jobModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                where: {job_id: req.params.id}
            });
            return res.status(200).json({ status: true, message: 'Details of Job', result });
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

    async commentDetails(req, res) {
		try {
			const result = await commentModel.findAll({
                include: [
                    {
                        model: userModel,
                        as: 'rec_detail',
                        attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                    },
                ],
                attributes: { exclude: ['createdAt', 'updatedAt', 'status', 'ip', 'updatedBy', 'createdBy', 'title', 'canId'] },
                where: {canId: req.params.id}
            });
            return res.status(200).json({ status: true, message: 'Comment list', result });
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

    async commentUpdate(req, res) {
		try {
			await commentModel.update(req.body, {
                where: {id: req.params.id},
                silent: true
            });

            const result = await commentModel.findOne({
                include: [
                    {
                        model: userModel,
                        as: 'rec_detail',
                        attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                    },
                ],
                attributes: { exclude: ['createdAt', 'updatedAt', 'status', 'ip', 'updatedBy', 'createdBy', 'title', 'canId'] },
                where: {id: req.params.id}
            });

            return res.status(200).json({ status: true, message: 'Updated', result });
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

    async commentDelete(req, res) {
		try {
			await commentModel.destroy({
                where: {id: req.params.id},
            });
            return res.status(200).json({ status: true, message: 'Deleted' });
		} catch (error) {
			return res.status(500).json({status: false, message: 'Internal Server Error'});
		}
	}

}
module.exports = new CandidateProfileService();