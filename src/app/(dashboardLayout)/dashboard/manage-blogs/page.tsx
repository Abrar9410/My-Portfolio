import { getAllBlogs } from "@/actions/blog";
import BlogManagement from "@/components/dashboard/manageBlogsPage/BlogManagement";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Manage Blogs",
    description: ""
};


const ManageBlogsPage = async () => {

    const { data: blogs } = await getAllBlogs();

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Manage Blogs</h2>
            <BlogManagement data={blogs}/>
        </div>
    );
};

export default ManageBlogsPage;