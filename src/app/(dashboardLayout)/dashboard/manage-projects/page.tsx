import { getAllProjects } from "@/actions/project";
import ProjectManagement from "@/components/dashboard/manageProjectsPage/ProjectManagement";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Manage Projects",
    description: ""
};


const ManageProjectsPage = async () => {
    const { data: projects, meta } = await getAllProjects();

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Manage Projects</h2>
            <ProjectManagement data={projects} meta={meta}/>
        </div>
    );
};

export default ManageProjectsPage;