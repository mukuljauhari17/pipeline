const Sequelize = require('sequelize');

const sequelize = require('../../database/connection');

module.exports = sequelize.define('dk_user', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    orderNo: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    first_name: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    last_name: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    userImg: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    enable: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    freezeTableName: true
});