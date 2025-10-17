import { getSingleBlog } from "@/actions/blog";
import BackButton from "@/components/BackButton";
import { format } from "date-fns";
import Image from "next/image";


export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const { data: blog } = await getSingleBlog(blogId);

    return {
        title: blog?.title || "Not Found",
        description: blog?.contentHTML || ""
    };
};



const SingleBlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {

    const {blogId} = await params;
    const {data: blog} = await getSingleBlog(blogId);

    return (
        <>{
            blog ?
                <div className="max-w-3xl mx-auto my-10 relative">
                    <BackButton className="mb-4" />
                    <p className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>Published on: {format(blog.createdAt as string, "PPP")}</span>
                        <span>{blog.views} views</span>
                    </p>
                    <Image
                        src={blog.thumbnail}
                        alt="BLOG THUMBNAIL"
                        placeholder="blur"
                        blurDataURL={blog.thumbnail}
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
                </div> :
                <p className="text-center text-red-500 text-xl font-semibold mt-10">
                    Sorry! No Blog was found with this ID.
                </p>
        }</>
    );
};

export default SingleBlogPage;