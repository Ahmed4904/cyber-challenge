import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { submitAnswer } from '../features/quizSlice';

const QuizPage = () => {
  const dispatch = useDispatch();
  const { quizzes, currentQuizId, responses } = useSelector((state) => state.quiz);
  const { id: quizIdParam } = useParams();
  const quizId = parseInt(quizIdParam, 10);

  const currentQuiz = quizzes.find((quiz) => quiz.id === quizId);

  if (!currentQuiz || quizId !== currentQuizId || !currentQuiz.questions) {
    console.log('Quiz introuvable ou questions non définies');
    return <div className="section">Quiz introuvable</div>;
  }

  const currentQuizState = responses[currentQuizId];
  const currentQuestionIndex = currentQuizState?.currentQuestion ?? 0;
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  console.log('currentQuestion:', currentQuestion);

  const handleAnswerSubmit = (selectedOption) => {
    dispatch(submitAnswer({ questionId: currentQuestion.id, selectedOption }));
  };

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h2 className="title is-2">{currentQuiz.title}</h2>
          <h3 className="title is-4">Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.questionText}</p>
          <div className="buttons">
            {currentQuestion.answers.map((answer) => (
              <button key={answer.id} onClick={() => handleAnswerSubmit(answer.id)} className="button is-primary">
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
