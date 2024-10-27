import api from "../../api/api";
import { projects } from "../../interfaces/projects";

export const getAllProject = async (): Promise<projects[]> => {
    const response = await api.get<projects[]>('/projects'); 
    return response.data; 
};