

const SingleProjectPage = async ({params}: {params: Promise<{projectId: string}>}) => {

    const {projectId} = await params;

    return (
        <div>
            PROJECT DETAILS {projectId}
        </div>
    );
};

export default SingleProjectPage;