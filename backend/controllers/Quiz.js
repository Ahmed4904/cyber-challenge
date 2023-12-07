import Quiz from "../models/QuizModel.js"

export const getQuizzes = async(req,res)=>{
    try {
        const response = await Quiz.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

