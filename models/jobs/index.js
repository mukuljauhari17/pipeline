const Sequelize = require('sequelize');

const sequelize = require('../../database/connection');

module.exports = sequelize.define('company_jobs', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    com_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    company: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    contract: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    project: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    role: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    lang: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    cv_url: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    exp: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    skills: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    job_id: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    date1: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    date2: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    date3: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    no_of_jobs: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    fee: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    g_salary: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    tax: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    n_salary: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    bonus: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    responsibility: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    r_pack: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    requirement: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    benefits: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    visa: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    url: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    user_1: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    user_2: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    interview_url: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
});