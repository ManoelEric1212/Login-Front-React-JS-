import { Children, useState } from "react"
import { JsxAttribute } from "typescript"
import { User } from "../../types/user";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const signin = (nomeUsuario: string, senha: string) => {
    }
    const signout = () => {
    }
    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}
