import { getSingleBlog } from "@/actions/blog";
import EditBlogForm from "@/components/dashboard/manageBlogsPage/EditBlogForm";


const EditBlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {

    const {blogId} = await params;
    const {data: blog} = await getSingleBlog(blogId);

    if (!blog) {
        return (
            <p className="text-center text-red-500 text-xl">Blog does not exist!</p>
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Edit Blog</h2>
            <EditBlogForm blog={blog} />
        </div>
    );
};

export default EditBlogPage;