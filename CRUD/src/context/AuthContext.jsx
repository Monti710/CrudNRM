import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest  } from '../api/auth';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used with AuthContext');
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([]);


    const signup = async (user) => {
        try{
            const res = await registerRequest(user)
            setUser(res.data);
            setIsAuthenticated(true); 
        }catch(error){
            /* console.log(error.response); */
            setErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        try{
            const res = await loginRequest(user)
            console.log(res)
            /* setUser(res.data);
            setIsAuthenticated(true);  */
        }catch(error){
            /* console.log(error.response); */
            if(Array.isArray(error.response.data)){
                return  setErrors(error.response.data);
            }
            setErrors([error.response.data.message])
        } 
    }

    useEffect(() => {
        if (errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 3000);
            return () => clearTimeout(timer) 
        }
    }, [errors])
    return (
        <AuthContext.Provider 
        value = {{
            user,
            signup,
            signin,
            isAuthenticated,
            errors
            
        }}>
            
            {children}
        </AuthContext.Provider>
    )
}