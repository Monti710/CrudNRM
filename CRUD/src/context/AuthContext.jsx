import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Limpiar errores después de 5 segundos
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    // Verificar token al cargar el componente
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            const token = cookies.token;

            if (!token) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false); // Cambiar loading a false cuando no hay token
                return;
            }

            try {
                const res = await verifyTokenRequest(token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false); // Cambiar loading a false si el token no es válido
                    return;
                }

                setUser(res.data);
                setIsAuthenticated(true);
                setLoading(false); // Cambiar loading a false cuando el usuario está autenticado
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false); // Cambiar loading a false si hay un error al verificar el token
            }
        }
        checkLogin();
    }, []);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                signin,
                loading,
                isAuthenticated,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
