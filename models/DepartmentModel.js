const {DataTypes} = require('sequelize');

module.exports.Department = (sequelize) => {
    return sequelize.define(
        'Department',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: true,
            },
            department_name: {
                type: DataTypes.BLOB,
                allowNull: false,
            } 
        },
        {
            // Other model options go here
            freezeTableName: true,
            //tableName: 'tablename',
            timestamps: true,
        }
    );
}