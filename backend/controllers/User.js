import User from "../models/UserModel.js"
import argon2 from "argon2"

export const getUsers = async(req,res)=>{
    try {
        const response = await User.findAll({
            attributes:['id','uuid','username','email','role']
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getUserById =  async(req,res)=>{
    try {
        const response = await User.findOne({
            attributes:['id','uuid','username','email','role'],
            where: {
                uuid:req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getUserByEmail =  async(req,res)=>{
    const {email} = req.params
    try {
        const response = await User.findOne({
            where: {
                email:email,
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const createUser =  async(req,res)=>{
    const {username,email,password,confPassword,role} = req.body
    if(password !== confPassword) return res.status(400).json({msg:"Mots de passe ne correspondent pas"})
    const hashPassword = await argon2.hash(password)
    const existUser = await User.findOne({
        where:{
            email
        }
    })
    if(existUser) return res.status(400).json({msg:"Cet utilsateur existe déjà"})
    try {
        await User.create({
            username:username,
            email:email,
            password:hashPassword,
            role:role
        })
        res.status(201).json({msg:"Ajouté avec succès"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

export const updateUser = async(req,res)=>{
    const user = await User.findOne({
        where: {
            uuid:req.params.id
        }
    })
    if(!user) return res.status(404).json({msg:"Utilisateur non trouvé"})
    const {id,username,email,password,confPassword,role} = req.body
    let hashPassword;
    if(password==="" || password===null){
        hashPassword=user.password
    }else{
        hashPassword = await argon2.hash(password)
    }
    if(password !== confPassword) return res.status(400).json({msg:"Mots de passe ne correspondent pas"})
    try {
        await User.update({
            id:id,
            username:username,
            email:email,
            telephone:telephone,
            password:hashPassword,
            role:role
        },{
            where: {
                id:user.id
            }
        })
        res.status(200).json({msg:"Utilsateur modifié avec succès"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

export const deleteUser = async(req,res)=>{
    const user = await User.findOne({
        where: {
            uuid:req.params.id
        }
    })
    if(!user) return res.status(404).json({msg:"Utilisateur non trouvé"})
    try {
        await User.destroy({
            where: {
                id:user.id
            }
        })
        res.status(200).json({msg:"Utilsateur supprimé avec succès"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}