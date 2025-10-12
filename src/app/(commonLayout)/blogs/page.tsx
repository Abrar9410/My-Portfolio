import { Metadata } from "next";


export const metadata: Metadata = {
    title: "",
    description: ""
};


const BlogsPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            BLOGS
        </div>
    );
};

export default BlogsPage;