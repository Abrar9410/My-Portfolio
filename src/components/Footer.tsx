import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";


const Footer = () => {
    return (
        <footer className="bg-foreground dark:bg-black border-t pt-6 pb-4 mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto flex max-[400px]:flex-col max-sm:gap-8 max-sm:justify-evenly justify-between flex-wrap">
                
                <div className="max-sm:w-full sm:w-1/3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-6">
                    <h3 className="flex items-center gap-2 2xl:gap-4 font-bold text-xl min-[900px]:text-2xl 2xl:text-3xl text-portfolio">
                        <Image src="/my_logo.PNG" alt="Logo" width={60} height={40} priority
                            className="w-[30px] h-[20px] md:w-[35px] md:h-[23px] xl:w-[40px] xl:h-[26px] 2xl:w-[45px] 2xl:h-[30px]"
                        />
                        Abrar Shahriar
                    </h3>
                    <p className="mt-2 text-white max-sm:text-center max-md:text-sm max-sm:px-6 min-[1200px]:pr-6 min-[1436px]:pr-8 2xl:pr-14">
                        Full Stack Developer with a passion for building modern, scalable and smooth web applications.
                    </p>
                </div>
                
                <div className="flex flex-col items-center max-[400px]:w-full sm:w-1/3">
                    <h4 className="font-bold text-lg md:text-xl text-center text-white mb-2 md:mb-3">Quick Links</h4>
                    <Link href="/about" className="w-max mb-1 text-white/70 hover:text-portfolio">
                        About
                        Me</Link>
                    <Link href="/projects" className="w-max mb-1 text-white/70 hover:text-portfolio">
                        Projects
                    </Link>
                    <Link href="/blogs" className="w-max mb-1 text-white/70 hover:text-portfolio">
                        Blogs
                    </Link>
                    <Link href="/contact" className="w-max mb-1 text-white/70 hover:text-portfolio">
                        Contact
                    </Link>
                    <Link href="https://drive.google.com/file/d/17htC_1urOAdcoxOdCOAdeWaiYnI55BmC/view?usp=drive_link" target="_blank"
                        className="w-max mb-1 text-white/70 hover:text-portfolio flex items-center gap-1"
                    >
                        Resume <ExternalLink size={16} />
                    </Link>
                </div>
                
                <div className="flex flex-col items-center max-[400px]:w-full sm:w-1/3">
                    <h4 className="font-bold text-lg md:text-xl text-center text-white mb-2 md:mb-3">Connect</h4>
                    <div className="flex justify-center items-center gap-4">
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
                            <Mail className="w-5 md:w-6 text-white" />
                        </Link>
                    </div>
                </div>
                
                <Separator className="my-3 bg-white/20" />
            
            </div>
            <p className="text-center text-xs min-[435px]:text-sm text-white/60">Copyright © {new Date().getFullYear()} Abrar Shahriar - All rights reserved </p>
        </footer>
    );
};

export default Footer;