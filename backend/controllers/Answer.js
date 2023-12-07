import Answer from "../models/AnswerModel.js"

// Contrôleur de création d'une réponse
export const createAnswer = async (req, res) => {
  try {
    const answer = await Answer.create(req.body);
    return res.status(201).json(answer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération de toutes les réponses
export const getAnswers = async (req, res) => {
  try {
    const answers = await Answer.findAll();
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération d'une réponse par ID
export const getAnswerById = async (req, res) => {
  const { id } = req.params;
  try {
    const answer = await Answer.findOne({ where: { id } });
    if (!answer) {
      return res.status(404).json({ message: 'Réponse non trouvée' });
    }
    return res.status(200).json(answer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de mise à jour d'une réponse par ID
export const updateAnswerById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Answer.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedAnswer = await Answer.findOne({ where: { id } });
      return res.status(200).json(updatedAnswer);
    }
    throw new Error('Réponse non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de suppression d'une réponse par ID
export const deleteAnswerById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Answer.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Réponse non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

