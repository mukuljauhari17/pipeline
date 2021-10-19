const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');
let userData = require('../user');

const comments = sequelize.define('process_comments', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    commentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    canId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    updatedAt: {
        type: Sequelize.DATE,
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
        type: Sequelize.TINYINT,
        values: [0, 1]
    },
    ip: {
        type: Sequelize.STRING(50),
        allowNull: true
    }
});

comments.belongsTo(userData, { as: 'rec_detail', foreignKey: 'createdBy' });

module.exports = comments;