import { createContext, useState } from "react"

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [ isAuth, setIsAuth ] = useState(false)

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return <AuthContext.Provider value={{ isAuth, toggleAuth }} >{children}</AuthContext.Provider>
}