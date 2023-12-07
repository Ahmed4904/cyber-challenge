import Question from "../models/QuestionModel.js"

export const getQuestions = async(req,res)=>{
    try {
        const response = await Question.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

