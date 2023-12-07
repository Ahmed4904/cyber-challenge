import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import Quiz from "./QuizModel.js"

const {DataTypes} = Sequelize

const Question = db.define('question', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
        notEmpty: true,
    },
  },
}, {
  freezeTableName: true,
});

Quiz.hasMany(Question);
Question.belongsTo(Quiz,{foreignKey: 'quizId' });

export default Question
