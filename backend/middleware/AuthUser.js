/*import User from "../models/UserModel.js"

export const verifyUser = async(req,res,next)=>{
    if(!req.session.userId){
        return res.status(401).json({msg:"S'il vous plait connectez-vous à votre compte"})
    }
    const user = await User.findOne({
        attributes:['id','uuid','nom','prenom','email','telephone','role'],
        where: {
            uuid: req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg:"Utilisateur non trouvé"})
    req.userId = user.id
    req.role = user.role
    req.email= user.email
    next()
}

export const adminOnly = async(req,res,next)=>{
    const user = await User.findOne({
        attributes:['id','uuid','nom','prenom','email','telephone','role'],
        where: {
            uuid: req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg:"Utilisateur non trouvé"})
    if(user.role !== "admin") return res.json({msg:"Accès interdit"})
    next()
}*/