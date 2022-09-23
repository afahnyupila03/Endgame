import React, { useEffect, useState } from "react";


const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        handleLogin: () => {},
        handleLogout: () => {}
    }
);


export const AuthContextProvider = props => {

    const [isLoggedIn ,setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1')
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    }
    useEffect(
        () => {
            const login = localStorage.setItem('isLoggedIn', '1');
            if (login === '1') {
                setIsLoggedIn(true)
            }
        }, []
    );

    return (

        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: handleLogout,
                onLogin: handleLogin
            }}
        >
            {props.children}
        </AuthContext.Provider>

    );

};




export default AuthContext;