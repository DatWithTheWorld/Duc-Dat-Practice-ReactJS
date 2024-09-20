import React from "react";
import { NavItems } from "../constants/constants";
import { navItem } from "../interfaces/navItem";
import ButtonDL from "./ButtonDL";


interface NavProps{
    style: string; 
}
const Nav: React.FC<NavProps> = ({style}) => {
    return (
        <nav className={`p-6 flex  justify-center items-center gap-28 absolute top-7 left-1/2 transform -translate-x-1/2 rounded-2xl  ${style}`}>
            <div className="max-h-20 max-w-max flex gap-1.5">
                <figure>
                    <img src="/public/lg-home.svg" alt="" />
                </figure>
                <p className="text-sm font-bold text-nowrap">PURITY UI DASHBOARD</p>
            </div>
            <ul className="flex gap-8 justify-center items-center">
                {
                    NavItems.map((item: navItem) => (
                    <li className="flex gap-1.5 uppercase font-bold text-xs" key={item.id}>
                        <figure className="flex w-3">
                            <img className="w-full h-full" src={item.image} alt={`Image for ${item.title}`} />
                        </figure>
                        <span className="text-nowrap">{item.title}</span>
                    </li>
                    ))
                }
            </ul>

            <ButtonDL style=" bg-buttonDlBlack text-white"/>
        </nav>
    );
};

export default Nav;