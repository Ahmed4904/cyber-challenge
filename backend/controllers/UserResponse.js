import UserResponse from "../models/UserResponseModel.js"


export const createUserResponse = async (req, res) => {
  try {
    const userResponse = await UserResponse.create(req.body);
    return res.status(201).json(userResponse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération de toutes les réponses utilisateur
export const getUserResponses = async (req, res) => {
  try {
    const userResponses = await UserResponse.findAll();
    return res.status(200).json(userResponses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération d'une réponse utilisateur par ID
export const getUserResponseById = async (req, res) => {
  const { id } = req.params;
  try {
    const userResponse = await UserResponse.findOne({ where: { id } });
    if (!userResponse) {
      return res.status(404).json({ message: 'Réponse utilisateur non trouvée' });
    }
    return res.status(200).json(userResponse);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de mise à jour d'une réponse utilisateur par ID
export const updateUserResponseById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await UserResponse.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUserResponse = await UserResponse.findOne({ where: { id } });
      return res.status(200).json(updatedUserResponse);
    }
    throw new Error('Réponse utilisateur non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de suppression d'une réponse utilisateur par ID
export const deleteUserResponseById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await UserResponse.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Réponse utilisateur non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

