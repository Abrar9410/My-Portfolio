import { getAllProjects } from "@/actions/project";
import { IProject } from "@/types";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";


const FeaturedProjects = async () => {

    const { data: projects } = await getAllProjects("?featured=true");

    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dark:text-portfolio">
                Featured Projects
            </h1>
            <p className="max-sm:text-sm mt-2 mb-6 sm:mb-8 md:mb-10 text-center">
                Some of my best works until now!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    projects ? projects?.map((project: IProject) => (
                        <ProjectCard key={project._id} project={project} />
                    )) :
                        <h3 className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 text-center text-2xl text-gray-400">
                            No Project is Featured currently
                        </h3>
                }
            </div>

            <Link
                href="/projects"
                className="w-max mx-auto px-3 py-2 rounded-lg text-sm bg-portfolio text-[#151925] flex justify-center items-center gap-1 font-semibold hover:bg-black hover:text-portfolio hover:gap-2"
            >
                View All Projects <MoveRight size={16} />
            </Link>            
        </section>
    );
};

export default FeaturedProjects;