import api from "../../api/api"
import { User } from "../../interfaces/user";

export const login = async (data: { email: string; password: string; }): Promise<User> => {
    const response =  await api.get('/users', {
        params: {
            email: data.email,
            password: data.password
        },
    });
    if(response.data.length === 0){
        throw new Error('Invalid credentials');
    }
    return response.data[0];
}

export const register = async (data: {name: string; email: string; password: string}) : Promise<User> => {
    const response = await api.post('/users', data);
    return response.data;
}