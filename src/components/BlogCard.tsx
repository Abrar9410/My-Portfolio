import { IBlog } from "@/types";
import { format } from "date-fns";
import { Eye, MoveRight, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <article className="overflow-hidden bg-card text-card-foreground rounded-lg border border-portfolio shadow-sm transition hover:shadow-lg">
            <Image
                src={blog.thumbnail}
                alt="Blog Thumbnail"
                width={650}
                height={500}
                className="h-64 w-full object-fill"
            />

            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <time className="block">{format(blog.createdAt as string, "PP")}</time>
                    <p className="flex justify-end items-center gap-1"><Eye size={12}/>{blog.views}</p>
                </div>

                <h3 className="mt-0.5 text-lg">{blog.title}</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
                    {blog.overview}
                </p>
                <p className="mt-2 flex items-center gap-1 text-sm/relaxed text-muted-foreground">
                    <Tag size={14} />
                    <span>{blog.tags.join(", ")}</span>
                </p>
                <Link href={`/blogs/${blog._id}`} className="w-max flex items-center gap-1 hover:gap-2 hover:underline dark:text-portfolio mt-4">
                    <span>Find out more</span>
                    <MoveRight size={16}/>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;