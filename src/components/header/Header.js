import React from "react"
import logo from "./E-logo.png"

const Header = () => {
    return (
        <div className="w-full h-20 flex justify-around items-center bg-[#f8f7f3]">
            <div>
                <img src={logo} alt="Logo" className="w-16" />
            </div>
            <div className="w-3/5 md:w-1/4 h-full flex justify-around items-center">
                <a href="#" className="flex text-xs md:text-sm mr-2 font-body text-[#545E75]">Home</a>
                <a href="#about-me" className="flex text-xs md:text-sm mr-2 font-body text-[#545E75]">About me</a>
                <a href="#" className="flex text-xs md:text-sm mr-2 font-body text-[#545E75]">Skills</a>
                <a href="#" className="flex text-xs md:text-sm font-body text-[#545E75]">Projects</a>
            </div>
        </div>
    )
}

export default Header