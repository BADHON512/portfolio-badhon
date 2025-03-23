import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'

import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { TypewriterEffectSmooth } from './ui/SupperAnimation'

type Props = {}

const Hero = (props: Props) => {

    const words = [
        { text: "Bringing" },
        { text: "ideas" },
        { text: "to" },
        { text: "life" },
        { text: "with" },
        { text: "effortless" },
        { text: "user" },
        { text: "experiences.", 
            className: "text-blue-500 dark:text-blue-500" },
    ];


    return (
        <div className='pb-20 pt-36'>
            <div className="">
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />

                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

            </div>

            <div className="absolute top-0 left-0 flex h-[100vh] w-full items-center justify-center bg-white dark:bg-[#000319]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest  md:text-2xl  text-center w-full mx-auto text-blue-100 mb-10  '>Dynamic Web Magic with Me</h2>

                    < TypewriterEffectSmooth words={words} />

                    <p className='text-center md:tracking-wider mb-4 text-sm md md:text-lg lg:text-2xl my-10'>Hi, i&apos;am badhon Front Wnd Web Developer based in bangladesh</p>


                    <div className="w-full text-center mt-20">
                        <a href="#about" className='text-center'>
                            <MagicButton
                                icon={<FaLocationArrow />}
                                position='right'
                                title='Show my work'
                            />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero