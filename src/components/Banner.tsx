import { Download, Mail, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DesignationText from "./DesignationText";



const Banner = () => {
    return (
        <section className="flex max-md:flex-col justify-between items-center max-md:gap-8 pt-4 sm:pt-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16">
            
            <div className="flex flex-col max-md:items-center max-md:text-center gap-1 min-[500px]:gap-2 md:gap-3 xl:gap-4 md:w-1/2 py-4 md:pl-4">
                <p className="min-[300px]:text-lg min-[400px]:text-xl xl:text-2xl 2xl:text-3xl font-semibold">Hello, I&apos;m</p>
                <h1 className="text-xl min-[300px]:text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold">
                    Abrar Shahriar
                </h1>
                <DesignationText/>
                <p className="text-sm min-[300px]:text-base lg:text-lg xl:text-xl md:pr-4">
                    with a passion for creating beautiful and responsive websites.
                </p>
                <p className="min-[300px]:text-lg min-[400px]:text-xl md:text-2xl font-semibold">Find Me On:</p>
                <div className="flex items-center gap-4 lg:gap-6">
                    <Link href="https://linkedin.com/in/abrar-shahriar-10sm" target="_blank" className="hover:scale-105">
                        <Image
                            src="https://res.cloudinary.com/dbvnl644p/image/upload/v1761069083/linkedin-svgrepo-com_fkpeyc.svg"
                            alt="LinkedIn"
                            width={36}
                            height={36}
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61551634958282" target="_blank" className="hover:scale-105">
                        <Image
                            src="https://res.cloudinary.com/dbvnl644p/image/upload/v1761066451/facebook-svgrepo-com_bf04he.svg"
                            alt="facebook"
                            width={36}
                            height={36}
                            className="w-6 h-6 md:w-7 md:h-7"
                        />
                    </Link>
                    <Link href="https://github.com/Abrar9410" target="_blank" className="hover:scale-105">
                        <Image
                            src="https://res.cloudinary.com/dbvnl644p/image/upload/v1760902013/github-142-svgrepo-com_murrab.svg"
                            alt="GitHub"
                            width={36}
                            height={36}
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                    </Link>
                    <Link href="mailto:abrarshahriar.pro@gmail.com" target="_blank" className="hover:scale-105">
                        <Mail className="w-5 md:w-6 text-foreground" />
                    </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Link
                        href="/projects"
                        className="w-max px-3 py-2 rounded-lg text-sm bg-portfolio text-[#151925] hover:bg-black hover:text-portfolio flex justify-center items-center gap-1 font-semibold"    
                    >
                        View My Work <MoveRight size={16}/>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/17htC_1urOAdcoxOdCOAdeWaiYnI55BmC/view?usp=drive_link"
                        target="_blank"
                        className="flex justify-center items-center gap-1 font-semibold bg-foreground text-background hover:bg-black hover:text-portfolio px-3 py-2 rounded-lg text-sm"
                    >
                        Resume <Download size={16}/>
                    </Link>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center 2xl:bg-black/20 rounded-xl">
                <div className="sm:w-1/2 md:w-2/3 mx-auto overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dbvnl644p/image/upload/v1761236020/4p5b35j1uie-1759261529192-abrarshahriar0-jpg.png"
                        alt="Abrar Shahriar"
                        width={665}
                        height={845}
                        priority
                        className="w-full h-auto object-cover rounded-xl bg-black/20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;