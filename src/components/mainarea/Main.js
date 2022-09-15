import React from "react";
import helloHand from "./handy.png"
import hello from "./Hi.png"

const Main = () => {
    return (
        <div className="w-full h-screen overflow-hidden bg-[#f8f7f3]">
        <div className="w-full h-80 overflow-hidden bg-[#f8f7f3]">
            <img src={helloHand} alt="Greetings hand" className="w-2/3 absolute right-0 mt-32" />
            <img src={hello} alt="Macbook" className="w-2/3 m-auto mt-20 md:mt-12" />
        </div>
        <h3 className="w-4/5 m-auto mt-16 md:opacity-0 font-body text-xs flex justify-center items-center">Would you like to learn something about me ?</h3>
        <div className="w-20 h-20 bg-transparent absolute bottom-5 left-1/2">
            <span className="absolute top-0 left-0 block w-full h-full -translate-y-20 -translate-x-1/2 rotate-45 border-b-4  border-r-4 border-solid border-[#737373] animate-bumpy"></span>
        </div>
        </div>
    )
}

export default Main