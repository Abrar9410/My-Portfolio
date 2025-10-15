import { getAllProjects } from "@/actions/project";
import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { IProject } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "",
    description: ""
};


const ProjectsPage = async () => {
    const { data: projects } = await getAllProjects();

    return (
        <div>
            <Heading
                title="My Projects"
                subtitle="A showcase of my work! To suggest improvements or discuss new project, feel free to reach out."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    projects ? projects?.map((project: IProject) => (
                        <ProjectCard key={project._id} project={project} />
                    )) :
                        <h3 className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 text-center text-2xl text-gray-400">
                            No Project to Show
                        </h3>
                }
            </div>
        </div>
    );
};

export default ProjectsPage;