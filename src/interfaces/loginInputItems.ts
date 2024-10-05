import { InputFieldName } from "../utils/constants/constants";

export interface LoginInputItems {
    name: InputFieldName;
    label: string;
    type: "text" | "password" | "email";
    placeholder: string;
}

