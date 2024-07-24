const Sequelize = require('sequelize');
const database = require('../data_base/db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    age: {
         type:Sequelize.INTEGER,
         allowNull: false
    },
    address: {

        type: Sequelize.STRING,
        allowNull: false
    }
    }, {
        //configurações do modelo
        timestamps: true, // habilita createdAt e updatedAt
        hooks: {
            beforeCreate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                User.createdAt = threeHoursLater;
                User.updatedAt = threeHoursLater;

            },
            beforeUpdate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                User.updatedAt = threeHoursLater;

        }
    }

    });

    module.exports = User;