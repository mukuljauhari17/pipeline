const express = require('express');
const router = express.Router();
const { CandidateProfileController } = require('../../controller');

router.get('/values_by_id/:id', CandidateProfileController.valuesById);
router.get('/profile/:id', CandidateProfileController.basicProfile);
router.post('/bulk_delete', CandidateProfileController.bulkDetele);
router.get('/document/:id', CandidateProfileController.documentDetails);
router.get('/job_details/:id', CandidateProfileController.jobDetails);
router.get('/comment_details/:id', CandidateProfileController.commentDetails);
router.put('/comment_update/:id', CandidateProfileController.commentUpdate);
router.delete('/comment_delete/:id', CandidateProfileController.commentDelete)

module.exports = router;