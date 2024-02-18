const {DataTypes} = require('sequelize');

module.exports.Employee = (sequelize) => {
    return sequelize.define(
        'Employee',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: true,
            },
            first_name: {
                type: DataTypes.BLOB,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.BLOB,
                allowNull: false,
            },
            email_address: {
                type: DataTypes.BLOB,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.BLOB,
                allowNull: true,
            },
            organization: {
                type: DataTypes.BLOB,
                allowNull: false,
            },

            salary: {
                type: DataTypes.BLOB,
                allowNull: true,
            },

            status: {
                type: DataTypes.BLOB,
                allowNull: true,
            },



             
        },
        {
            // Other model options go here
            freezeTableName: true,
            //tableName: 'tablename',
            timestamps: true,
        }
    );
}