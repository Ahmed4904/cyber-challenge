import Question from "../models/QuestionModel.js"


// Contrôleur de création d'une question
export const createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération de toutes les questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération d'une question par ID
export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findOne({ where: { id } });
    if (!question) {
      return res.status(404).json({ message: 'Question non trouvée' });
    }
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de mise à jour d'une question par ID
export const updateQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Question.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedQuestion = await Question.findOne({ where: { id } });
      return res.status(200).json(updatedQuestion);
    }
    throw new Error('Question non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de suppression d'une question par ID
export const deleteQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Question.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Question non trouvée');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


