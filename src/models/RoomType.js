const { DataTypes, INTEGER, FLOAT, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RoomType",
    {
        id:{
            type: UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        people:{
            type: INTEGER,
            allowNull: false,
        },
        price:{
            type:FLOAT,
            allowNull: false,
        },
        name:{
            type: STRING,
            allowNull: false,
            unique: true,
        }
    },
    {
      timestamps: false,
    }
  );
};