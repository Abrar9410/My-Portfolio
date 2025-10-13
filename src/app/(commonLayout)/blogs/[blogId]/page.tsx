import { getSingleBlog } from "@/actions/blog";
import dayjs from "dayjs";
import Image from "next/image";


export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const { data: blog } = await getSingleBlog(blogId);

    return {
        title: blog.title,
        description: blog.contentHTML
    };
};



const SingleBlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {

    const {blogId} = await params;
    const {data: blog} = await getSingleBlog(blogId);

    return (
        <div className="max-w-3xl mx-auto my-10 relative">
            <p className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                <span>Published on: {dayjs(blog.createdAt).format("DD MMM YYYY")}</span>
                <span>{blog.views} views</span>
            </p>
            <Image 
                src={blog.thumbnail}
                alt="BLOG THUMBNAIL"
                width={650}
                height={500}
                priority={true}
                className="w-full h-auto object-fill"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center my-6">{blog.title}</h1>
            <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
            />
        </div>
    );
};

export default SingleBlogPage;