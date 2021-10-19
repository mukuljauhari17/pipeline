const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');

module.exports = sequelize.define('backend_value', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    heading_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    order_no: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    value: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    bg_color: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    text_color: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: Sequelize.TINYINT,
        values: [0, 1]
    },
    ip: {
        type: Sequelize.STRING(50),
        values: [0, 1]
    }
}, {
    freezeTableName: true
});