

const SingleBlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {

    const {blogId} = await params;

    return (
        <div>
            BLOG DETAILS {blogId}
        </div>
    );
};

export default SingleBlogPage;