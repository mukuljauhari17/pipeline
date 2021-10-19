const { CandidateProfileService } = require('../../../services');

class CandidateProfileController {
    async valuesById(req, res, next) {
        try {
            await CandidateProfileService.valuesById(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async basicProfile(req, res, next) {
        try {
            await CandidateProfileService.basicProfile(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async bulkDetele(req, res, next) {
        try {
            await CandidateProfileService.bulkDetele(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async documentDetails(req, res, next) {
        try {
            await CandidateProfileService.documentDetails(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async jobDetails(req, res, next) {
        try {
            await CandidateProfileService.jobDetails(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async commentDetails(req, res, next) {
        try {
            await CandidateProfileService.commentDetails(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async commentUpdate(req, res, next) {
        try {
            await CandidateProfileService.commentUpdate(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async commentDelete(req, res, next) {
        try {
            await CandidateProfileService.commentDelete(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }
    
}

module.exports = new CandidateProfileController();