import { Sequelize } from "sequelize"
import db from '../config/Database.js'

import User from './UserModel.js'
import Quiz from './QuizModel.js'
import Question from './QuestionModel.js'

const {DataTypes} = Sequelize

const UserResponse = db.define('userresponse', {
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
        notEmpty: true,
    },
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
        notEmpty: true,
    },
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

User.hasMany(UserResponse)
UserResponse.belongsTo(User, { foreignKey: 'userId' })

Question.hasMany(UserResponse)
UserResponse.belongsTo(Question, { foreignKey: 'questionId' })

Quiz.hasMany(UserResponse)
UserResponse.belongsTo(Quiz, { foreignKey: 'quizId' })

export default UserResponse
