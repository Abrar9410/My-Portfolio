import AddProjectForm from "@/components/dashboard/addProjectPage/AddProjectForm";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Add Project",
    description: ""
};


const AddProjectPage = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Add New Project</h2>
            <AddProjectForm />
        </div>
    );
};

export default AddProjectPage;