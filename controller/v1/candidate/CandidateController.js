const { CandidateService } = require('../../../services');

class CandidateController {
    async getList(req, res, next) {
        try {
            await CandidateService.getList(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async flagCount(req, res, next) {
        try {
            await CandidateService.flagCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async recruitersCount(req, res, next) {
        try {
            await CandidateService.recruitersCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async amCount(req, res, next) {
        try {
            await CandidateService.amCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async categoryCount(req, res, next) {
        try {
            await CandidateService.categoryCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseStatusCount(req, res, next) {
        try {
            await CandidateService.caseStatusCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseProgressCount(req, res, next) {
        try {
            await CandidateService.caseProgressCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseStageCount(req, res, next) {
        try {
            await CandidateService.caseStageCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async companyCount(req, res, next) {
        try {
            await CandidateService.companyCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async projectCount(req, res, next) {
        try {
            await CandidateService.projectCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async roleCount(req, res, next) {
        try {
            await CandidateService.roleCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async languageCount(req, res, next) {
        try {
            await CandidateService.languageCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async resourceCount(req, res, next) {
        try {
            await CandidateService.resourceCount(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async getAll(req, res, next) {
        try {
            await CandidateService.getAll(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async update(req, res, next) {
        try {
            await CandidateService.update(req, res, next);
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }
    
}

module.exports = new CandidateController();