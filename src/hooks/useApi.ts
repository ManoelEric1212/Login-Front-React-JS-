import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
    },
    signin: async (nomeUsuario: string, senha: string) => {
        const response = await api.post('/autenticacao/login', { nomeUsuario, senha });
        return response;
    },
    signout: async () => {

    }

});