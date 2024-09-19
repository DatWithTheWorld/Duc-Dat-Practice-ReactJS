import React from "react";


interface NavProps{
    style: string; 
}
const Nav: React.FC<NavProps> = ({style}) => {
    return (
        <nav className={style}>
            <div className="">
                <figure>
                    <img src="/public/lg-home.svg" alt="" />
                </figure>
                <p>PURITY UI DASHBOARD</p>
            </div>
            <ul>
            </ul>
        </nav>
    );
};

export default Nav;