import axios from "axios";
import {createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

export function AuthProvider({children}) {
    const URL = ''
    const Navigate = useNavigate()


    const [errorResponse, setErrorResponse] = useState('')

    const login = async (data) =>{

        const userdata = data.user;
        const pass = data.password
        try {
            setErrorResponse('try')

            const response = await axios.post('https://balance-dxhn.onrender.com/login', {
                user: 
                    {
                        email: userdata, 
                        password: pass
                    }
                }
            )

            if(response.status === 200 && pass === 'y56EnYI47U'){
                localStorage.setItem("b3Cd8E5gHiJ2kLmN9oPqR6sTuV4wXyZ7" ,  true)
                Navigate('./')
                window.location.reload();
            } else {
                setErrorResponse('error')
            }
            
        } catch (error) {
            setErrorResponse('error')
        }
    }
  return (
    <AuthContext.Provider
        value={{login, errorResponse}}
    >
        {children}

    </AuthContext.Provider>
  )
}
