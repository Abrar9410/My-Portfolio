import { getAllBlogs } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import Heading from "@/components/Heading";
import { IBlog } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "",
    description: ""
};


const BlogsPage = async () => {

    const { data: blogs } = await getAllBlogs();

    return (
        <>
            <Heading
                title="My Blogs"
                subtitle="Welcome to my blogs! Here I have tried to share my little knowledge and own thoughts. Hope, you enjoy!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10">
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