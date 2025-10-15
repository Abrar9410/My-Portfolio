import { IProject } from "@/types";
import { format } from "date-fns";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <article className="overflow-hidden bg-card text-card-foreground rounded-lg border border-portfolio shadow-sm transition hover:shadow-lg">
            <Image
                src={project.thumbnail}
                alt="Blog Thumbnail"
                placeholder="blur"
                blurDataURL={project.thumbnail}
                width={650}
                height={500}
                className="h-auto w-full object-fill"
            />

            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <time className="block">{format(project.startDate as string, "PP")}</time>
                    {/* <time className="block">{format(project.endDate as string, "PP")}</time> */}
                </div>

                <h3 className="mt-0.5 text-lg">{project.title}</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
                    {project.overview}
                </p>
                <p className="mt-2 flex items-center gap-1 text-sm/relaxed text-muted-foreground">
                    <span>Technologies:</span> 
                    <span>{project.technologies.join(", ")}</span>
                </p>
                <Link href={`/projects/${project.title}`} className="w-max flex items-center gap-1 hover:gap-2 hover:underline dark:text-portfolio mt-4">
                    <span>View Details</span>
                    <MoveRight size={16}/>
                </Link>
            </div>
        </article>
    );
};

export default ProjectCard;