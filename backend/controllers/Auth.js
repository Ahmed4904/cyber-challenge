import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    const match = await argon2.verify(user.password, req.body.password);

    if (!match) {
      return res.status(404).json({ msg: "Mot de passe incorrect" });
    }

    req.session.userId = user.uuid;
    req.session.idUser = user.id;

    const { id, uuid, username, email, role } = user;

    res.status(200).json({ id, uuid, username, email, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur lors de la connexion" });
  }
};

export const me = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ msg: "Veuillez vous connecter à votre compte" });
    }

    const user = await User.findOne({
      attributes: ['id', 'uuid', 'username', 'email', 'role'],
      where: {
        uuid: req.session.userId,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur lors de la récupération de l'utilisateur" });
  }
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ msg: "Impossible de se déconnecter" });
    }
    res.status(200).json({ msg: "Vous êtes déconnecté" });
  });
};
