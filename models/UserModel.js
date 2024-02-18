const {DataTypes} = require('sequelize');

module.exports.User = (sequelize) => {
    return sequelize.define(
        'User',
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
            password:{
                type: DataTypes.BLOB,
                allowNull: false,
            },
            created_by: {
                type: DataTypes.BLOB,
                allowNull: false,
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