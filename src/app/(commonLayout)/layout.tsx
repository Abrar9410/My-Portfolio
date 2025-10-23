import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 w-11/12 md:w-10/12 xl:w-9/12 mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;