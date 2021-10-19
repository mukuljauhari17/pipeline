const Sequelize = require('sequelize');

const sequelize = require('../../database/connection');

const candidatesDoc = sequelize.define('candidate_docs', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    canId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    fileFrom: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    fileName: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    fileType: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: Sequelize.TINYINT,
        values: [0, 1]
    }
});

module.exports = candidatesDoc;