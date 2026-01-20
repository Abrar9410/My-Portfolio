import { getAllBlogs } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import Heading from "@/components/Heading";
import { IBlog } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Blogs | Abrar Shahriar",
    description: "This page previews all the blogs created by Abrar Shahriar."
};


const BlogsPage = async () => {

    const { data: blogs } = await getAllBlogs();

    return (
        <>
            <Heading
                title="My Blogs"
                subtitle="I have not started writing blogs yet as I am currently more focused on my learning and projects!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    blogs ? blogs?.map((blog: IBlog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    )):
                    <h3 className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 text-center text-2xl text-gray-400">
                        No Blogs to Show
                    </h3>
                }
            </div>
        </>
    );
};

export default BlogsPage;