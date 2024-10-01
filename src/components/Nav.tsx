import React from "react";
import { NavItems } from "../constants/constants";
import { navItem } from "../interfaces/navItem";
import ButtonDL from "./ButtonDL";
import NavProps from "../interfaces/navProps";

const Nav: React.FC<NavProps> = ({style, theme, logo}) => {
    return (
        <nav className={`p-4 flex  justify-between items-center  rounded-2xl  ${style}`}>
            <a href="" className=" flex items-center">
                <figure className="mr-1">
                    <img src={logo} className="bg-auto" alt="No image logo" />
                </figure>
                <p className="max-sm:hidden text-0.875rem font-bold text-nowrap">PURITY UI DASHBOARD</p>
            </a>
             <ul className="flex max-lg:hidden w-[45%] justify-between items-center">
                {
                    NavItems.map((item: navItem) => (
                    <li className="flex gap-1.5 items-center justify-center uppercase font-bold text-0.625rem" key={item.id}>
                        <figure className="flex w-3">
                            <img className="w-full h-full"  src={theme === 'white' ? item.imageWhite : item.imageBlack} alt={`Image for ${item.title}`} />
                        </figure>
                        <a href="" className="text-nowrap">{item.title}</a>
                    </li>
                    ))
                }
            </ul>

            <ButtonDL style=" bg-buttonDlBlack text-white"/> 
        </nav>
    );
};

export default Nav;

