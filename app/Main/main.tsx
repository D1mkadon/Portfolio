import React from 'react'
import Particles from '../Components/particles'
import Link from 'next/link'



const Main = () => {
    return (
        <>    <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight py-5 px-0.5 z-15 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Dmytro Tarasenko
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Frontend developer
                    React.Js | Next.Js {` `}
                    <Link
                        target="_blank"
                        href="https://github.com/D1mkadon"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        github
                    </Link>
                </h2>
            </div></>
    )
}

export default Main