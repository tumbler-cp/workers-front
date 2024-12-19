import { createContext, ReactNode, useState } from "react";
import { User } from "../entities/Auth";

interface AuthContextType {
    user: User,
    signin: (username: string, password: string) => Promise<void>,
    signup: (username: string, password: string) => Promise<void>,
    signout: () => void
}

export const AuthContext = createContext<AuthContextType>(undefined as any);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>(null as any);
    const baseUrl = 'http://localhost:8080';

    const signin = async (username: string, password: string) => {
        const response = await fetch(baseUrl, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            }
        ).then(res => res.json()).catch(err => console.error(err));
        setUser(response);
    }

    const signup = async (username: string, password: string) => {
        const response = await fetch(baseUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            }
        ).then(res => res.json()).catch(err => console.error(err));
        setUser(response);
    }

    const signout = async () => {
        setUser(null as any);
    }

    return (
        <AuthContext.Provider value={{user, signin, signup, signout}}>
            {children}
        </AuthContext.Provider>
    );
}