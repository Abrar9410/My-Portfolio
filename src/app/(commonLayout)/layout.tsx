import Navbar from "@/components/Navbar";


const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar />
            <div className="w-11/12 md:w-10/12 mx-auto">
                {children}
            </div>
        </div>
    );
};

export default CommonLayout;