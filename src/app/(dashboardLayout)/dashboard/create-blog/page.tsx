import CreateBlogForm from "@/components/dashboard/createBlogPage/createBlogForm";


const CreateBlogPage = () => {

    return (
        <div className="w-11/12 md:w-10/12 mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Write New Blog</h2>
            <CreateBlogForm />
        </div>
    );
}


export default CreateBlogPage;
