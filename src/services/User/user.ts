import api from "../../api/api";
import { User } from "../../interfaces/user";

export const getUserById = async (id: string): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
}