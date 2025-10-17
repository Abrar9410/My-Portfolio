import { getSingleProject } from "@/actions/project";
import UpdateProjectForm from "@/components/dashboard/manageProjectsPage/UpdateProjectForm";



const UpdateProjectPage = async ({params}: {params: Promise<{projectTitle: string}>}) => {

    const { projectTitle } = await params;
    const { data: project } = await getSingleProject(projectTitle);

    if (!project) {
        return (
            <p className="text-center text-red-500 text-xl">No Project found with this Title</p>
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-portfolio mb-10">Update Project</h2>
            <UpdateProjectForm project={project} />
        </div>
    );
};

export default UpdateProjectPage;