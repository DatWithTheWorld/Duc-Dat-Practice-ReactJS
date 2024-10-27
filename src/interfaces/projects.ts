export interface projects {
    id?: number;
    name?: string;
    shortDescription?: string;
    longDescription?: string;
    price?: number;
    image?: string;
    uids?: UserId[];   
}
export interface UserId {
    uid?: string; 
}