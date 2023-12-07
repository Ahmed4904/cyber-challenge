import UserResponse from "../models/UserResponseModel.js"

export const getUserResponses = async(req,res)=>{
    try {
        const response = await UserResponse.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
