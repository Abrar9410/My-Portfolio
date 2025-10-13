import { getSingleBlog } from "@/actions/blog";


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
        <div>
            BLOG DETAILS OF - {blog.title}
        </div>
    );
};

export default SingleBlogPage;