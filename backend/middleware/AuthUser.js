import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
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

    req.userId = user.id;
    req.role = user.role;
    req.email = user.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur lors de la vérification de l'utilisateur" });
  }
};

export const adminOnly = async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'uuid', 'username', 'email', 'role'],
      where: {
        uuid: req.session.userId,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    if (user.role !== "admin") {
      return res.json({ msg: "Accès interdit" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur lors de la vérification de l'accès administrateur" });
  }
};
