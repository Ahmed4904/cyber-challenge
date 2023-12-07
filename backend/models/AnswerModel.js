import { Sequelize } from "sequelize"
import db from "../config/Database.js";
import Question from "./QuestionModel.js";

const {DataTypes} = Sequelize

const Answer = db.define('answer', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        },
  },
}, {
  freezeTableName: true,
});

Question.hasMany(Answer)
Answer.belongsTo(Question,{ foreignKey:'questionId'})

export default Answer
