import {  createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{

    const [token,settoken]=useState(localStorage.getItem('token'))

    const storeTokenInLS=(serverToken)=>{
        console.log("token saved")
        return localStorage.setItem('token', serverToken)
    }

    const getToken = () => {
        return localStorage.getItem('token')
    } 

    let isloggedin =!! token;

    const logout = () => {
        localStorage.removeItem("token");
      };
    
    return <AuthContext.Provider value={{storeTokenInLS, isloggedin, getToken, logout}}>
        {children}
    </AuthContext.Provider>


}


export const useAuth=()=>{
    return useContext(AuthContext)
}
