import NavbarContent from "./NavbarContent";
import { getCurrentUser } from "@/lib/currentUser";


const Navbar = async () => {

    const user = await getCurrentUser();

    return (
        <header className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto my-2 bg-foreground/60 dark:bg-black/60 text-white border-b rounded-xl px-4 md:px-6 sticky top-2 z-10 backdrop-blur-md">
            <NavbarContent user={user}/>
        </header>
    );
};

export default Navbar;