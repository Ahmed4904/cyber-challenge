import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique de gestion de l'inscription
    console.log('Nom d\'utilisateur:', username);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    // Réinitialisez les champs après la soumission du formulaire
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nom d'utilisateur</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Entrez votre nom d'utilisateur"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              type="email"
              className="input"
              placeholder="Entrez votre email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Mot de passe</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-primary">S'inscrire</button>
        </div>
      </form>

      <div className="login-link">
        <p>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></p>
      </div>
    </div>
  );
};

export default Register;
