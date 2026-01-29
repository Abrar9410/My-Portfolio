import Image from "next/image";


const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            {/* Logo / Brand Mark */}
            <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <Image src="/my_logo.PNG" alt="Logo" width={60} height={40} className="w-[60px] h-[40px]" />
                </div>

                {/* Spinner */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-portfolio animate-spin" />
            </div>

            {/* Text */}
            <div className="mt-6 text-center space-y-1">
                <p className="text-lg font-medium">Abrar Shahriar</p>
                <p className="text-sm text-muted-foreground">
                    Full-Stack Developer
                </p>
            </div>
        </div>
    );
};

export default Loading;