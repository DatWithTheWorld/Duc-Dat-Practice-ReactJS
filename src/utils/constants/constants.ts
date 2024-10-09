// src/constants/constants.ts

import { icApple, icDashboardNavBlack, icDashboardNavWhite, icFacebook, icGoogle, icProfilesNavBlack, icProfilesNavWhite, icSigninNavBlack, icSigninNavWhite, icSignupNavBlack, icSignupNavWhite } from "../../assets/icons";
import { footerItem } from "../../interfaces/footerItems";
import { LoginInputItems } from "../../interfaces/loginInputItems";
import { navItem } from "../../interfaces/navItem"; // Import interface
import { SignUpInputItems } from "../../interfaces/signupInputItems";
import { signUpItem } from "../../interfaces/signUpitem";

export const SignUpItem: signUpItem[] = [
    {
        id:1,
        image: icFacebook,
        atl: 'Facebook'
    },
    {
        id:2,
        image: icApple,
        atl: 'Apple'
    },
    {
        id:3,
        image: icGoogle,
        atl: 'Google'
    }
]

export const NavItems: navItem[] = [
    {
        id: 1,
        imageBlack: icDashboardNavBlack, // Icon màu đen
        imageWhite: icDashboardNavWhite, // Icon màu trắng
        title: "dashboard",
    },
    {
        id: 2,
        imageBlack: icProfilesNavBlack,
        imageWhite: icProfilesNavWhite,
        title: "profile",
    },
    {
        id: 3,
        imageBlack: icSignupNavBlack,
        imageWhite: icSignupNavWhite,
        title: "sign up",
    },
    {
        id: 4,
        imageBlack: icSigninNavBlack,
        imageWhite: icSigninNavWhite,
        title: "sign in",
    }
];

export const footerItems: footerItem[]= [
    {
        id: 1,
        title: 'Creative Tim'
    },
    {
        id: 2,
        title: 'Simmmple'
    },
    {
        id: 3,
        title: 'Blog'
    },
    {
        id: 4,
        title: 'License'
    }
];

export const loginInputItems: LoginInputItems[] = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email'
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password'
    }
]

export const signupInputItems: SignUpInputItems[] = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email'
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password'
    }
]
export type InputFieldName = 'email' | 'password';
export type SignUpFieldName = 'email' | 'password' | 'name';

