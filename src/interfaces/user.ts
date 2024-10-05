export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    otherFields?: Record<string, unknown>;
}