import React from "react";
import helloHand from "./handy.png"
import hello from "./Hi.png"

const Main = () => {
    return (
        <div className="w-full h-screen overflow-hidden bg-[#f8f7f3]">
        <div className="w-full h-96 overflow-hidden bg-[#f8f7f3]">
            <img src={helloHand} alt="Greetings hand" className="w-2/3 md:w-1/2 absolute right-0 mt-32" />
            <img src={hello} alt="Macbook" className="w-2/3 m-auto mt-20 z-10 md:mt-6" />
        </div>
        <div className="w-20 h-20 bg-transparent absolute bottom-5 left-1/2">
            <a href="#" className="absolute top-0 left-0 block w-full h-full -translate-y-20 -translate-x-1/2 rotate-45 border-b-4  border-r-4 border-solid border-[#737373] animate-bumpy"></a>
        </div>
        </div>
    )
}

export default Main