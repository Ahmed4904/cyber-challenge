// components/Accueil.js
import React from 'react';
import { Link } from 'react-router-dom';
import './accueil.css';
import Navbar from '../components/Navbar';

const Accueil = () => {
  return (
    <>
          <Navbar/>

    <div className="background-container">
      <div className="container">
        <div className="welcome-container">
          <h2>Bienvenue sur la Page d'Accueil</h2>
          <div className="button-container">
            <Link to="/list-quiz">
              <button className="quiz-button">Lancer un Quiz</button>
            </Link>
            <Link to="/historique">
              <button className="history-button">Voir l'Histoire des Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Accueil;
