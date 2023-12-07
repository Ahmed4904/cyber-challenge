/*import User from "../models/UserModel.js"
import argon2 from "argon2"

export const Login = async(req,res)=>{
    const user = await User.findOne({
        where: {
            email:req.body.email
        }
    })
    if(!user) return res.status(404).json({msg:"Utilisateur non trouvé"})
    const match = await argon2.verify(user.password,req.body.password)
    if(!match) return res.status(404).json({msg:"Mot de passe incorrect"})
    req.session.userId = user.uuid
    req.session.idUser= user.id
    const id = user.id
    const uuid = user.uuid
    const nom = user.nom
    const prenom = user.prenom
    const email = user.email
    const telephone = user.telephone
    const role = user.role
    res.status(200).json({id,uuid,nom,prenom,email,telephone,role})
}

export const Me = async(req,res)=>{
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
    res.status(200).json(user)
}

export const logOut = (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json("Impossible de se déconnecter")
        res.status(200).json({msg:"Vous etes déconnecté"})
    })
}*/