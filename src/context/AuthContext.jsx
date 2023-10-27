import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

// aanmaken van Provider component
const AuthContextProvider = ({ children }) => {
    // aanmaken van State in het Provider component, geef initiele waarde mee van false
    const [isAuth, setIsAuth] = useState(false);

const navigate = useNavigate();

    function login() {
        setIsAuth(true);
        console.log('Gebruiker is ingelogd!');
        navigate('/signin');
        
    }

    function logout() {
        setIsAuth(false);
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }

// aanmaken van een data object, geef waarde mee van State
const data = {
    isAuth: isAuth,
    logout: logout,
    login: login,
};

// returnen van het Provider component
return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>;
};

export default AuthContextProvider;