import Quiz from "../models/QuizModel.js"

// Contrôleur de création d'un quiz
export const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    return res.status(201).json(quiz);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération de tous les quiz
export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    return res.status(200).json(quizzes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de récupération d'un quiz par ID
export const getQuizById = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findOne({ where: { id } });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz non trouvé' });
    }
    return res.status(200).json(quiz);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de mise à jour d'un quiz par ID
export const updateQuizById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Quiz.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedQuiz = await Quiz.findOne({ where: { id } });
      return res.status(200).json(updatedQuiz);
    }
    throw new Error('Quiz non trouvé');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Contrôleur de suppression d'un quiz par ID
export const deleteQuizById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Quiz.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Quiz non trouvé');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
