import React,{createContext, UseState, UseEffect, useContext, Children, useState, useEffect} from 'react';



const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({Children}) =>
{
    const [currentUser, setCurretntUser] = useState(null);
    useEffect(() =>{
        const userId = localStorage.getItem('userId');
        if (userId) {
            setCurretntUser(userId);
        }
    }, []);

    const value = {
        currentUser,  setCurretntUser
    }

    return <AuthContext.Provider value = {value} >  {Children} </AuthContext.Provider>
}

