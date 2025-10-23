"use client"

import { Typewriter } from 'react-simple-typewriter';



const DesignationText = () => {
    return (
        <p className="min-[300px]:text-lg min-[400px]:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold dark:text-portfolio">
            <Typewriter
                words={['Full Stack Developer', 'MERN Stack Developer', 'Web Development Enthusiast']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </p>
    );
};

export default DesignationText;