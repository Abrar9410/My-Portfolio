import { getSingleProject } from "@/actions/project";
import BackButton from "@/components/BackButton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Wrench, Link as Links } from "lucide-react";
// import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";


export const generateMetadata = async ({ params }: { params: Promise<{ projectTitle: string }> }) => {

    const { projectTitle } = await params;
    const { data: project } = await getSingleProject(projectTitle);

    return {
        title: project?.title || "Not Found",
        description: project?.detailsHTML || ""
    };
};


const SingleProjectPage = async ({ params }: { params: Promise<{ projectTitle: string }> }) => {

    const { projectTitle } = await params;
    const { data: project } = await getSingleProject(projectTitle);

    return (
        <>{
            project ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 relative">
                    <div className="md:col-span-2 relative">
                        <BackButton className="mb-4" />
                        <Image
                            src={project.thumbnail}
                            alt="PROJECT THUMBNAIL"
                            placeholder="blur"
                            blurDataURL={project.thumbnail}
                            width={650}
                            height={500}
                            priority={true}
                            className="w-full h-auto rounded-xl object-fill"
                        />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center dark:text-portfolio my-6">
                            {project.title}
                        </h1>
                        <div
                            className="prose dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: project.detailsHTML }}
                        />
                    </div>

                    <div>
                        <div className="sm:sticky sm:top-40 p-4 bg-card text-card-foreground border border-portfolio rounded-xl">
                            <h3 className="text-center text-lg font-bold">Quick Glance</h3>
                            <Separator className="my-4" />
                            <p className="font-semibold mb-3 flex justify-center items-center gap-2">
                                <Wrench size={16} />Technologies
                            </p>
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                {
                                    project.technologies.map((tech: string, idx: number) => (
                                        <Badge key={idx} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))
                                }
                            </div>
                            <Separator className="my-4" />
                            <p className="font-semibold mb-3 flex justify-center items-center gap-2">
                                <Links size={16} />Links
                            </p>
                            <div className="flex justify-center items-center gap-6 flex-wrap">
                                <Link
                                    href={project.github_repo} target="_blank"
                                    className="w-max flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <Github size={14} /> GitHub Repository
                                </Link>
                                <Link
                                    href={project.live_link} target="_blank"
                                    className="w-max flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <ExternalLink size={14} /> Live Link
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="mt-10">
                    <p className="text-center text-red-500 text-xl font-semibold">
                        Sorry! I have not either done or added any project named &lsquo;{projectTitle}&rsquo; yet.
                    </p>
                    <p className="text-center text-xl font-semibold">
                        To discuss new project with me, please pay a visit
                        to <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link> page.
                    </p>
                </div>
        }</>
    );
};

export default SingleProjectPage;