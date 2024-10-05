
import * as Yup from "yup";

export const schemaLogin = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

