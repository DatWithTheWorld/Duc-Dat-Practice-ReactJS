import React from "react";

const ButtonDL = ({style}: {style:string}) => {
   return (
    <button className={`text-nowrap font-bold p-2 px-4 rounded-3xl ${style}`}> Free Download</button>
   )
};

export default ButtonDL;

