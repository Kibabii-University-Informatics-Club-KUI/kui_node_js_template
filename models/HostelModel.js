const {DataTypes} = require('sequelize');

module.exports.Hostel = (sequelize) => {
    return sequelize.define(
        'Hostel',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: true,
            },
            Hostel_name: {
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