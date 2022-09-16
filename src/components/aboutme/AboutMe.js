import React from "react"
import hand1 from "./aboutme1.png"
import hand2 from "./aboutme2.png"

const AboutMe = () => {
    return (
        <div className="w-full h-screen ">
            <div className="w-2/3 m-auto font-body text-2xl mb-4">
                <h1>Who am i ?</h1>
            </div>
            <div>
                <img src={hand1} className="w-32 absolute -rotate-90 right-0" />
            </div>
            <div className="w-2/3 m-auto font-body text-sm flex">
                <p>First of all, my name is Erdenay Karataş. I am a 21 years old computer programming student at Dokuz Eylül University. When i was graduated highscool, i had to choose a road for my life and then i met someone who has been coding for few years and i was impressed of his story. That moment i said to myself: "Hey, why not ?". So i started learning html, css and javascript with the guidance of my mentor and i liked it.Then i decided to be a web developer after i saw what and how i can build amazing things on web. So here is my story of how to start coding. I hope i can build something matters to the world and people one day.</p>
            </div>
        </div>
    )
}

export default AboutMe