import Answer from "../models/AnswerModel.js"

export const getAnswers = async(req,res)=>{
    try {
        const response = await Answer.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

