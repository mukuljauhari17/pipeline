const express = require('express');
const candidateRouter = express.Router();
const { CandidateController } = require('../../controller');

candidateRouter.get('/list/:status', CandidateController.getList)
candidateRouter.post('/flag_count', CandidateController.flagCount)
candidateRouter.post('/recruiters_count', CandidateController.recruitersCount)
candidateRouter.post('/am_count', CandidateController.amCount)
candidateRouter.post('/category_count', CandidateController.categoryCount)
candidateRouter.post('/case_status_count', CandidateController.caseStatusCount)
candidateRouter.post('/case_progress_count', CandidateController.caseProgressCount)
candidateRouter.post('/case_stage_count', CandidateController.caseStageCount)
candidateRouter.post('/company_count', CandidateController.companyCount)
candidateRouter.post('/project_count', CandidateController.projectCount)
candidateRouter.post('/role_count', CandidateController.roleCount)
candidateRouter.post('/language_count', CandidateController.languageCount)
candidateRouter.post('/resource_count', CandidateController.resourceCount)
candidateRouter.post('/all', CandidateController.getAll)
candidateRouter.post('/resource_count', CandidateController.resourceCount)

candidateRouter.put('/update/:id', CandidateController.update)

module.exports = candidateRouter;