import { SignUpFieldName } from "../utils/constants/constants";


export interface SignUpInputItems {
    name: SignUpFieldName
    label: string;
    type: "text" | "password" | "email";
    placeholder: string;
}

