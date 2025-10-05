

const NavLoading = () => {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center mt-10">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-portfolio animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-foreground animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-portfolio animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
};

export default NavLoading;