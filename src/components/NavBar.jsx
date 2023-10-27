import React from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

function NavBar() {
  const { isAuth, login, logout } = useContext(AuthContext);


  const navigate = useNavigate();

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        {/* Als gebruiker niet is ingelogd, staat de isAuth op false en wil je juist de login en register button zien */}
          {isAuth === false ? (
              <>
                  <button type="button" onClick={login}>
                      Log in
                  </button>
                  <button type="button" onClick={() => navigate('/signup')}>
                      Registreren
                  </button>
              </>
          ) : (
         // Als gebruiker wel is ingelogd, staat de isAuth op true en wil je juist de logout button zien
              <button type="button" onClick={logout}>
                  Logout
              </button>
          )}

      </div>
    </nav>
  );
}

export default NavBar;