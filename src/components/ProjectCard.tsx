import { IProject } from "@/types";
import { format } from "date-fns";
import { ExternalLink, Github, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <article className="flex flex-col overflow-hidden bg-card text-card-foreground rounded-lg border border-portfolio shadow-sm transition hover:shadow-lg">
            <Image
                src={project.thumbnail}
                alt="Blog Thumbnail"
                placeholder="blur"
                blurDataURL={project.thumbnail}
                width={650}
                height={500}
                className="w-full flex-1 object-fill"
            />

            <div className="p-4">

                <h3 className="text-lg text-center">{project.title}</h3>

                <p className="mt-0.5 text-center line-clamp-3 text-sm/relaxed text-muted-foreground">
                    {project.overview}
                </p>

                <div className="mt-4 flex justify-center items-center gap-1 flex-wrap">
                    {
                        project.technologies.map((tech: string, idx: number) => (
                            <Badge key={idx} variant="secondary">
                                {tech}
                            </Badge>
                        ))
                    }
                </div>

                <div className="flex justify-between items-center mt-6">
                    <Link
                        href={`/projects/${project.title}`}
                        className="w-max flex items-center gap-1 hover:gap-2 hover:underline dark:text-portfolio"
                    >
                        <span>View Details</span>
                        <MoveRight size={16} />
                    </Link>
                    <div className="flex justify-end items-center gap-4">
                        <Link
                            href={project.github_repo} target="_blank"
                            className="w-max text-blue-600 dark:text-blue-400 hover:animate-pulse"
                        >
                            <Github size={16} />
                        </Link>
                        <Link
                            href={project.live_link} target="_blank"
                            className="w-max text-blue-600 dark:text-blue-400 hover:animate-pulse"
                        >
                            <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>
                
            </div>
        </article>
    );
};

export default ProjectCard;