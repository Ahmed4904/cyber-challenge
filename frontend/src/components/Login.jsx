import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Importation de Link pour créer un lien vers la page d'inscription
import './login.css'; 
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser, reset } from "../features/authSlice"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isError, isLoading, isSuccess,message} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(user || isSuccess){
            navigate("/dashboard")
        }
        dispatch(reset())
    }, [user, isSuccess, navigate, dispatch])
    
    const Auth = (e)=>{
        e.preventDefault()
        dispatch(LoginUser({email,password}))
    }

  return (
    <div className="login-container">
      <h2 className='is-primary'>Connexion</h2>
      <form onSubmit={Auth} >
        <div className="field">
        {isError && <p className='has-text-centered has-text-danger has-text-weight-bold'>{message}</p>}
          <label className="label">Nom d'utilisateur</label>
          <div className="control">
            <input
              type="email"
              className="input"
              placeholder="Entrez votre nom email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
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
              onChange={(e)=>{setPassword(e.target.value)} }
            />
          </div>
        </div>
        <label className="checkbox">
        <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            />{' '}
            Afficher le mot de passe
        </label>

        <div className="control">
          <button type="submit" className="button is-primary">{isLoading? "Chargement...":"Se Connecter"}</button>
        </div>
      </form>

      <div className="register-link">
        <p>Vous n'avez pas de compte ? <Link to="/register">Créer un compte</Link></p>
      </div>
    </div>
  );
};

export default Login;
