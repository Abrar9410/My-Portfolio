import Link from "next/link";
import WhoIAmLottie from "./WhoIAmLottie";


const WhoIAm = () => {
    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 2xl:mt-16">
            <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold dark:text-portfolio">
                Who I Am
            </h1>

            <div className="flex max-md:flex-col items-center md:items-end gap-4 md:mt-6 xl:mt-8 2xl:mt-4">
                <WhoIAmLottie />
                <div className="md:w-1/2 md:pb-2">
                    <p className="md:h-[20.4vw] md:overflow-y-scroll md:pr-2 lg:text-lg xl:text-xl">
                        I&apos;m a <strong>Full-Stack Developer</strong> with significant skills and expertise in MERN stack
                        and also a great enthusiast of backend development and API design. I love solving real-world problems
                        through clean and maintainable code and robust logic.<br /><br />
                        Although at first I started to pursue B.Sc. Honors in Mathematics and adored that subject for
                        logical thinking and problem solving, I decided to leave due to some personal challenges and found
                        my true passion in coding. The reason behind choosing Web Development as my career is that it has a
                        perfect balance of logical thinking, critical thinking and also creativity.<br /><br />
                        I enjoy building and contributing to meaningful web applications which solve real-world problems
                        and make me face challenges to help me learn new things to grow as an expert developer.
                    </p><br/>
                    <Link
                        href="/about"
                        className="w-full px-3 py-2 rounded-lg bg-portfolio text-[#151925] hover:bg-black hover:text-portfolio flex justify-center items-center gap-1 font-semibold"
                    >
                        Know More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhoIAm;