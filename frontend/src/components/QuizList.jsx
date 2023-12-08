// QuizList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuizzesSuccess, startQuiz } from '../features/quizSlice';

const QuizList = () => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz.quizzes);

  useEffect(() => {
    // Simulez la récupération des quizzes depuis le backend
    const fakeQuizzes = [
      { id: 1, title: 'Quiz 1', description: 'Description du Quiz 1',
            questions:["Question 1","Question 2","Question 3"] },
      { id: 2, title: 'Quiz 2', description: 'Description du Quiz 2' ,
            questions:["Question 11","Question 12","Question 13"]},
    ];
    dispatch(fetchQuizzesSuccess(fakeQuizzes));
  }, [dispatch]);

  const handleStartQuiz = (quizId) => {
    dispatch(startQuiz(quizId));
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="title is-2">Liste des Quiz</h2>
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="box">
            <h3 className="title is-4">{quiz.title}</h3>
            <p>{quiz.description}</p>
            <Link to={`/passer-quiz/${quiz.id}`}  onClick={() => handleStartQuiz(quiz.id)} className="button is-primary">
              Passer ce quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
