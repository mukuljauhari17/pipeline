const Sequelize = require('sequelize');

const sequelize = require('../../database/connection');
let userData = require('../user');
let jobData = require('../jobs');

const candidates = sequelize.define('candidates', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    can_uid: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    canId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    flag_type: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    profileStatus: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    jobId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    req_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    am_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    req_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    commentCount: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    req_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    email1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    email2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    phone1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    phone2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    skypeId: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    d_o_b: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    nationality: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    age: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    availability: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    caseStatus: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    case_progress: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    case_stage: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    category: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    c_city: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    c_country: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    cv_source: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    native1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    native2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    fluent1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    fluent2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    Intermediate1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    Intermediate2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill11: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill12: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill13: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill21: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill22: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    it_skill23: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    career_skill1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    career_skill2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    exp_skill1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    exp_skill2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    other_skill1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    other_skill2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    jobSpecSent: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    cvSendoutDate: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    inSpecSent: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    joiningDate: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    invoiceNo: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    visaStatus: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    minSalary: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    maxSalary: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    profile_notes: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    current_package: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    current_currency: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    current_pay_per: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    expected_package: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    expected_currency: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    expected_pay_per: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    willing_to_negotiate: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    willing_to_relocate: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pref_continent: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pref_country1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pref_country2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pref_country3: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pref_country4: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    location_info: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    negotiation: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    creditPercentage: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    finalFee: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    bonus: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: Sequelize.ENUM,
        values: ['pipeline', 'pipeline_archive', 'database', 'database_archive', 'email_cv', 'delete', 'rec_pipeline', 'qa_pipeline', 'escalated']
    }
});

candidates.belongsTo(userData, { as: 'rec_detail', foreignKey: 'req_id' });
candidates.belongsTo(userData, { as: 'am_detail', foreignKey: 'am_id' });
candidates.belongsTo(jobData, { as: 'job_detail', foreignKey: 'jobId', targetKey: 'job_id' });

module.exports = candidates;