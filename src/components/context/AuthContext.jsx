import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({ name: '', email: '', password: '' });

    const dataLog = {
        userData,
        setUserData, 
    }

    return (
        <>
            <AuthContext.Provider value={dataLog} >
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;
