const candidateModel = require('../../../models/candidate');
const userModel = require('../../../models/user');
const jobModel = require('../../../models/jobs');
const Sequelize = require('sequelize');

class CandidateService {
    async getList(req, res) {
        try {
            const result = await candidateModel.findAll({
                include: [
                    {
                        model: userModel,
                        as: 'rec_detail',
                        attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                    },
                    {
                        model: userModel,
                        as: 'am_detail',
                        attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                    },
                    {
                        model: jobModel,
                        as: 'job_detail',
                        attributes: ['id', 'job_id', 'com_id', 'company', 'project', 'role', 'lang', 'name', 'no_of_jobs', 'fee'],
                    },
                ],
                where: { status: req.params.status },
                attributes: ['id', 'canId', 'flag_type', 'req_id', 'am_id', 'jobId', 'name', 'commentCount', 'caseStatus', 'case_progress', 'case_stage', 'category', 'cv_source', 'bonus', 'finalFee', 'creditPercentage'],
            })
            return res.status(200).json({ status: true, message: 'List', 'count': result.length, result });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async flagCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {

                const result = await this.execSerachQuery(payload, 'C.flag_type');

                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Flag Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['flag_type', [sequelize.fn('COUNT', sequelize.col('flag_type')), 'count']],
                    group: ['flag_type'],
                });

                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });

                return res.status(200).json({ status: true, message: 'Flag Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async recruitersCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.req_id');

                result.sort(function (a, b) {
                    return b.count - a.count;
                });

                let array = []
                if (result) {
                    for (let i = 0; i < result.length; i++) {
                        let json = {};
                        json.req_id = result[i].req_id;
                        json.count = result[0].count;
                        json.rec_detail = {
                            "first_name": result[i].first_name,
                            "last_name": result[i].last_name,
                            "email": result[i].email,
                            "userImg": result[i].userImg
                        }

                        array.push(json);
                    }
                }

                return res.status(200).json({ status: true, message: 'Req Count', result: array });

            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['req_id', [sequelize.fn('COUNT', sequelize.col('req_id')), 'count']],
                    group: ['req_id'],
                    include: [
                        {
                            model: userModel,
                            as: 'rec_detail',
                            attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                        },
                    ],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'Requiters Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async amCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {

                const result = await this.execSerachQuery(payload, 'C.am_id');

                result.sort(function (a, b) {
                    return b.count - a.count;
                });

                let array = []
                if (result) {
                    for (let i = 0; i < result.length; i++) {
                        let json = {};
                        json.am_id = result[i].am_id;
                        json.count = result[i].count;
                        json.am_detail = {
                            "first_name": result[i].first_name,
                            "last_name": result[i].last_name,
                            "email": result[i].email,
                            "userImg": result[i].userImg
                        }

                        array.push(json);
                    }
                }

                return res.status(200).json({ status: true, message: 'Am Count', result: array });

            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['am_id', [sequelize.fn('COUNT', sequelize.col('am_id')), 'count']],
                    group: ['am_id'],
                    include: [
                        {
                            model: userModel,
                            as: 'am_detail',
                            attributes: { exclude: ['userId', 'orderNo', 'status', 'enable', 'createdAt', 'updatedAt'] },
                        },
                    ],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'AM Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async categoryCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.category');
                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Category Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['category', [sequelize.fn('COUNT', sequelize.col('category')), 'count']],
                    group: ['category'],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                console.log(result)
                return res.status(200).json({ status: true, message: 'Case Category Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseStatusCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.caseStatus');

                result.sort(function (a, b) {
                    return b.count - a.count;
                });

                return res.status(200).json({ status: true, message: 'Case status Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['caseStatus', [sequelize.fn('COUNT', sequelize.col('caseStatus')), 'count']],
                    group: ['caseStatus'],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'AM Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseProgressCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.case_progress');
                return res.status(200).json({ status: true, message: 'Case progress Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['case_progress', [sequelize.fn('COUNT', sequelize.col('case_progress')), 'count']],
                    group: ['case_progress'],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'Case Peogress Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async caseStageCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.case_stage');
                return res.status(200).json({ status: true, message: 'Case stage Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['case_stage', [sequelize.fn('COUNT', sequelize.col('case_stage')), 'count']],
                    group: ['case_stage'],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'Case Stage Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async companyCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'J.company');
                return res.status(200).json({ status: true, message: 'Company Count', result });
            } else {
                let result = await sequelize.query(`SELECT COUNT(company) as count,B.id,B.company FROM candidates A INNER JOIN company_jobs B ON A.jobId = B.job_id WHERE A.status = 'database' GROUP BY B.company`, { type: Sequelize.QueryTypes.SELECT });
                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Company Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async projectCount(req, res) {
        try {

            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'J.project');
                return res.status(200).json({ status: true, message: 'Project Count', result });

            } else {
                let result = await sequelize.query(`SELECT COUNT(project) as count,B.id,B.company FROM candidates A INNER JOIN company_jobs B ON A.jobId = B.job_id WHERE A.status = 'database' GROUP BY B.project`, { type: Sequelize.QueryTypes.SELECT });
                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Project Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async languageCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'J.lang');
                return res.status(200).json({ status: true, message: 'Langugae Count', result });
            } else {
                let result = await sequelize.query(`SELECT COUNT(lang) as count,B.id,B.lang FROM candidates A INNER JOIN company_jobs B ON A.jobId = B.job_id WHERE A.status = 'database' GROUP BY B.lang`, { type: Sequelize.QueryTypes.SELECT });
                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Language Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async resourceCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'C.cv_source');
                return res.status(200).json({ status: true, message: 'Resource Count', result });
            } else {
                let result = await candidateModel.findAll({
                    where: { status: 'database' },
                    attributes: ['cv_source', [sequelize.fn('COUNT', sequelize.col('cv_source')), 'count']],
                    group: ['cv_source'],
                });
                result.sort(function (a, b) {
                    return b.dataValues.count - a.dataValues.count;
                });
                return res.status(200).json({ status: true, message: 'AM Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async roleCount(req, res) {
        try {
            const payload = req.body;
            if (payload.search || payload.filterFlag) {
                const result = await this.execSerachQuery(payload, 'J.role');
                return res.status(200).json({ status: true, message: 'Role Count', result });
            } else {
                let result = await sequelize.query(`SELECT COUNT(role) as count,B.id,B.role FROM candidates A INNER JOIN company_jobs B ON A.jobId = B.job_id WHERE A.status = 'database' GROUP BY B.role`, { type: Sequelize.QueryTypes.SELECT });
                result.sort(function (a, b) {
                    return b.count - a.count;
                });
                return res.status(200).json({ status: true, message: 'Role Count', result });
            }
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async getAll(req, res) {
        try {
            let payload = req.body;
            const page = payload.page ? payload.page : 1;
            const whereCnd = await this.getCondition(payload);

            if (payload.search) {
                const result = await sequelize.query(`SELECT C.id, C.canId, C.flag_type, C.req_id, C.am_id, C.jobId, C.name, C.commentCount, C.caseStatus, C.case_progress, C.case_stage, C.category, C.cv_source, C.bonus, C.finalFee, C.creditPercentage, C.createdAt, U.id as r_id, U.first_name as r_first_name, U.last_name as r_last_name, U.email as r_email, U.userImg as r_userImg, A.id as a_id, A.first_name as a_first_name, A.last_name as a_last_name, A.email as a_email, A.userImg as a_userImg, J.id as j_id, J.job_id, J.com_id, J.company, J.project, J.role, J.lang, J.name as j_name, J.no_of_jobs, J.fee FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.am_id = A.id ${whereCnd}`, { type: Sequelize.QueryTypes.SELECT });

                if (result.length <= 100) {
                    const response = await this.makeJson(result);
                    return res.status(200).json({ status: true, message: 'Search List', 'count': result.length, result: response });
                } else {
                    if (page == 1) {
                        const response = await this.makeJson(result.slice(0, 99));
                        return res.status(200).json({ status: true, message: 'Search List', 'count': result.length, result: response });
                    } else {
                        let offset = page - 1;
                        let initial = offset * 100;
                        let final = page * 100;
                        const response = await this.makeJson(result.slice(initial, final));
                        return res.status(200).json({ status: true, message: 'Search List', 'count': result.length, result: response });
                    }
                }
            } else {
                const offset = (page - 1) * 100;
                const limit = 100

                const count = await sequelize.query(`SELECT count(*) as count FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.am_id = A.id ${whereCnd}`, { type: Sequelize.QueryTypes.SELECT });
                const result = await sequelize.query(`SELECT C.id, C.canId, C.flag_type, C.req_id, C.am_id, C.jobId, C.name, C.commentCount, C.caseStatus, C.case_progress, C.case_stage, C.category, C.cv_source, C.bonus, C.finalFee, C.creditPercentage, C.createdAt, U.id as r_id, U.first_name as r_first_name, U.last_name as r_last_name, U.email as r_email, U.userImg as r_userImg, A.id as a_id, A.first_name as a_first_name, A.last_name as a_last_name, A.email as a_email, A.userImg as a_userImg, J.id as j_id, J.job_id, J.com_id, J.company, J.project, J.role, J.lang, J.name as j_name, J.no_of_jobs, J.fee FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.am_id = A.id ${whereCnd} LIMIT ${limit} OFFSET ${offset}`, { type: Sequelize.QueryTypes.SELECT });

                const response = await this.makeJson(result);
                return res.status(200).json({ status: true, message: 'List', 'count': count[0].count, result: response });
            }

        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async makeJson(data) {
        let array = [];
        try {
            for (let i = 0; i < data.length; i++) {
                let json = {};
                json.id = data[i].id;
                json.canId = data[i].canId;
                json.flag_type = data[i].flag_type;
                json.req_id = data[i].req_id;
                json.am_id = data[i].am_id;
                json.jobId = data[i].jobId;
                json.name = data[i].name;
                json.commentCount = data[i].commentCount;
                json.caseStatus = data[i].caseStatus;
                json.case_progress = data[i].case_progress;
                json.case_stage = data[i].case_stage;
                json.category = data[i].category;
                json.cv_source = data[i].cv_source;
                json.bonus = data[i].bonus;
                json.finalFee = data[i].finalFee;
                json.creditPercentage = data[i].creditPercentage;
                json.case_stage = data[i].case_stage;
                json.createdAt = data[i].createdAt;
                json.rec_details = {
                    id: data[i].r_id,
                    first_name: data[i].r_first_name,
                    last_name: data[i].r_last_name,
                    email: data[i].r_email,
                    userImg: data[i].r_userImg,
                }
                json.am_details = {
                    id: data[i].a_id,
                    first_name: data[i].a_first_name,
                    last_name: data[i].a_last_name,
                    email: data[i].a_email,
                    userImg: data[i].a_userImg,
                }
                json.job_detail = {
                    id: data[i].j_id,
                    job_id: data[i].job_id,
                    com_id: data[i].com_id,
                    company: data[i].company,
                    project: data[i].project,
                    role: data[i].role,
                    lang: data[i].lang,
                    name: data[i].j_name,
                    no_of_jobs: data[i].no_of_jobs,
                    fee: data[i].fee
                }
                array.push(json);
            }
            return array;
        } catch (error) {
            console.log(error)
            return array;
        }
    }

    async getCondition(payload) {

        let whereCnd = null;

        if (payload.search) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} CONCAT(C.canId, C.flag_type, C.req_id, C.am_id, C.jobId, LOWER(C.name), C.commentCount, LOWER(C.caseStatus), LOWER(C.case_progress), LOWER(C.case_stage), LOWER(C.category), LOWER(C.cv_source), C.bonus, C.finalFee, C.creditPercentage, LOWER(J.company), LOWER(J.project), LOWER(J.role), LOWER(U.first_name), LOWER(U.last_name), LOWER(U.email), LOWER(A.first_name), LOWER(A.last_name), LOWER(A.email), LOWER(J.lang)) LIKE '%${payload.search}%'`;
        }
        if (payload.filter.req_id || payload.filter.req_id == 0) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.req_id='${payload.filter.req_id}'`;
        }
        if (payload.filter.am_id || payload.filter.am_id == 0) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.am_id='${payload.filter.am_id}'`;
        }
        if (payload.filter.flag_type) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.flag_type='${payload.filter.flag_type}'`;
        }
        if (payload.filter.category) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.category='${payload.filter.category}'`;
        }
        if (payload.filter.caseStatus) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.caseStatus='${payload.filter.caseStatus}'`;
        }
        if (payload.filter.progress) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.case_progress='${payload.filter.progress}'`;
        }
        if (payload.filter.caseStage) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.case_stage='${payload.filter.caseStage}'`;
        }
        if (payload.filter.company) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} J.company='${payload.filter.company}'`;
        }
        if (payload.filter.project) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} J.project='${payload.filter.project}'`;
        }
        if (payload.filter.role) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} J.role='${payload.filter.role}'`;
        }
        if (payload.filter.language) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} J.lang='${payload.filter.language}'`;
        }
        if (payload.filter.resource) {
            whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.cv_source='${payload.filter.resource}'`;
        }

        whereCnd = `${whereCnd ? whereCnd + ' AND' : ' WHERE'} C.status='database'`;

        return whereCnd;
    }

    async execSerachQuery(payload, qType) {
        try {
            const whereCnd = await this.getCondition(payload);
            let result;
            if (qType == 'C.am_id' || qType == 'C.req_id') {
                if (qType == 'C.am_id') {
                    result = await sequelize.query(`SELECT count(${qType}) as count, ${qType}, A.first_name, A.last_name, A.email, A.userImg FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.am_id = U.id JOIN dk_user as A on C.am_id = A.id ${whereCnd} GROUP BY ${qType}`, { type: Sequelize.QueryTypes.SELECT });
                } else {
                    result = await sequelize.query(`SELECT count(${qType}) as count, ${qType}, A.first_name, A.last_name, A.email, A.userImg FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.req_id = A.id ${whereCnd} GROUP BY ${qType}`, { type: Sequelize.QueryTypes.SELECT });
                }
            } else {
                result = await sequelize.query(`SELECT count(${qType}) as count, ${qType} FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.am_id = A.id ${whereCnd} GROUP BY ${qType}`, { type: Sequelize.QueryTypes.SELECT });
            }
            return result;
        } catch (error) {
            return 0
        }
    }

    async update(req, res) {
        try {
            let toSet = {};
            for (var param in req.body) {
                toSet[req.body.key] = req.body.value;
            }
            await candidateModel.update(toSet, { where: { id: req.params.id } });
            // const result = await candidateModel.findOne({ where: { id: req.params.id } });
            const result = await sequelize.query(`SELECT C.id, C.canId, C.flag_type, C.req_id, C.am_id, C.jobId, C.name, C.commentCount, C.caseStatus, C.case_progress, C.case_stage, C.category, C.cv_source, C.bonus, C.finalFee, C.creditPercentage, C.createdAt, U.id as r_id, U.first_name as r_first_name, U.last_name as r_last_name, U.email as r_email, U.userImg as r_userImg, A.id as a_id, A.first_name as a_first_name, A.last_name as a_last_name, A.email as a_email, A.userImg as a_userImg, J.id as j_id, J.job_id, J.com_id, J.company, J.project, J.role, J.lang, J.name as j_name, J.no_of_jobs, J.fee FROM candidates C JOIN company_jobs J on C.jobId = J.job_id JOIN dk_user U on C.req_id = U.id JOIN dk_user as A on C.am_id = A.id WHERE C.id = ${req.params.id}`, { type: Sequelize.QueryTypes.SELECT });
            const response = await this.makeOneJson(result);
            return res.status(200).json({ status: true, message: 'Updated', response });
        } catch (error) {
            return res.status(500).json({ status: false, message: error });
        }
    }

    async makeOneJson(data) {
        try {
            let json = {};
            for (let i = 0; i < data.length; i++) {
                json.id = data[i].id;
                json.canId = data[i].canId;
                json.flag_type = data[i].flag_type;
                json.req_id = data[i].req_id;
                json.am_id = data[i].am_id;
                json.jobId = data[i].jobId;
                json.name = data[i].name;
                json.commentCount = data[i].commentCount;
                json.caseStatus = data[i].caseStatus;
                json.case_progress = data[i].case_progress;
                json.case_stage = data[i].case_stage;
                json.category = data[i].category;
                json.cv_source = data[i].cv_source;
                json.bonus = data[i].bonus;
                json.finalFee = data[i].finalFee;
                json.creditPercentage = data[i].creditPercentage;
                json.case_stage = data[i].case_stage;
                json.createdAt = data[i].createdAt;
                json.rec_details = {
                    id: data[i].r_id,
                    first_name: data[i].r_first_name,
                    last_name: data[i].r_last_name,
                    email: data[i].r_email,
                    userImg: data[i].r_userImg,
                }
                json.am_details = {
                    id: data[i].a_id,
                    first_name: data[i].a_first_name,
                    last_name: data[i].a_last_name,
                    email: data[i].a_email,
                    userImg: data[i].a_userImg,
                }
                json.job_detail = {
                    id: data[i].j_id,
                    job_id: data[i].job_id,
                    com_id: data[i].com_id,
                    company: data[i].company,
                    project: data[i].project,
                    role: data[i].role,
                    lang: data[i].lang,
                    name: data[i].j_name,
                    no_of_jobs: data[i].no_of_jobs,
                    fee: data[i].fee
                }
            }
            return json;
        } catch (error) {
            console.log(error)
            return array;
        }
    }
}
module.exports = new CandidateService();