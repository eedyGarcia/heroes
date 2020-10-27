import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    
    const lastPath = localStorage.getItem('lastPath') || '/';
    const handleLogin = ()=>{
        dispatch({
            type:types.login,
            payload:{
                name:'Eduardo'
            }
        });
        history.replace(lastPath);
    };
    return (
        <div className="container">
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                LogIn
            </button>
        </div>
    )
}
