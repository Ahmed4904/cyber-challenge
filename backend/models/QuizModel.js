import { Sequelize } from "sequelize"
import db from "../config/Database.js";

const {DataTypes} = Sequelize

const Quiz = db.define('quiz', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

export default Quiz