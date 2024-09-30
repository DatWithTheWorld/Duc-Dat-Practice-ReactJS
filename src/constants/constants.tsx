// src/constants/constants.ts

import { icDashboardNavBlack, icDashboardNavWhite, icProfilesNavBlack, icProfilesNavWhite, icSigninNavBlack, icSigninNavWhite, icSignupNavBlack, icSignupNavWhite } from "../assets/icons";
import { navItem } from "../interfaces/navItem"; // Import interface

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