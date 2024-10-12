import React from "react";
import { accountMenuItems, menuBarItems } from "../utils/constants/constants";
import { ReactSVG } from "react-svg";
import { icHelpmenu, icLogoBlack } from "../assets/icons";

const MenuBar: React.FC = () => {
    return(
        <div className="w-[18rem] p-4">
            <h3 className="flex gap-[10px]">
                    <ReactSVG
                        src={icLogoBlack}
                    />
                   <p style={{fontSize: "0.875rem", fontWeight: "bold"}}> PURITY UI DASHBOARD </p>
            </h3>
            <hr className="w-full h-px bg-gray-300" style={{marginTop: '1.8rem', marginBottom:'0.6rem',opacity: "0.6"}}/>
            <ul className="flex flex-col">
                {menuBarItems.map((item) => (
                    <li
                    key={item.id}
                    className="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out hover:bg-white group hover:rounded-[1rem] hover:shadow-md"
                    >
                        <div className="mr-2 bg-white p-1 group-hover:bg-welcomeText" style={{borderRadius: "0.45rem"}}>
                            <ReactSVG
                                src={item.svg as string} 
                                className="fill-current w-full h-full text-[#4FD1C5] transition duration-300 ease-in-out group-hover:text-white" // Đổi màu SVG khi hover
                            />
                        </div>
                        <p className="text-primaryTextColor text-0.75rem font-bold transition duration-300 ease-in-out group-hover:text-black">
                            {item.title}
                        </p>
                </li>
                ))}
            </ul>
            <span className="uppercase text-0.75rem font-bold">account pages</span>
            <ul className="flex flex-col">
                {accountMenuItems.map((item) => (
                    <li
                    key={item.id}
                    className="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out hover:bg-white group hover:rounded-[1rem] hover:shadow-md"
                    >
                        <div className="mr-2 bg-white p-1 group-hover:bg-welcomeText" style={{borderRadius: "0.45rem"}}>
                            <ReactSVG
                                src={item.svg as string} 
                                className="fill-current w-full h-full text-[#4FD1C5] transition duration-300 ease-in-out group-hover:text-white" // Đổi màu SVG khi hover
                            />
                        </div>
                        <p className="text-primaryTextColor text-0.75rem font-bold transition duration-300 ease-in-out group-hover:text-black">
                            {item.title}
                        </p>
                </li>
                ))}
            </ul>
            <div className="bg-welcomeText p-4 rounded-[1rem] mt-4">
                <figure className="p-[0.3rem] bg-white w-[2rem] rounded-[0.8rem] ">
                    <img src={icHelpmenu} alt="help" className="w-full h-full"/>
                </figure>
                <p className="mt-[1.5rem] text-0.875rem font-bold text-white">Need help?</p>
                <p className="text-0.875rem text-white">Please check our docs</p>
                <button className="uppercase text-0.625rem text-black font-bold bg-white rounded-[1rem] mt-3" style={{padding: "0.8rem 3rem 0.8rem 3rem"}}> <a href="https://v2.chakra-ui.com/">documentation</a> </button>
            </div>
        </div>
    )
};

export default MenuBar;