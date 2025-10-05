import { LoginForm } from "@/components/authentication/LoginForm";
import { ThemeToggler } from "@/components/ThemeToggler";
import Image from "next/image";
import Link from "next/link";


const Login = () => {
    return (
        <div className="bg-muted">
            <div className="w-11/12 md:w-10/12 mx-auto h-16 flex items-center justify-between">
                <Link href="/">
                    <Image src="/my_logo.PNG" alt="Logo" width={50} height={50} />
                </Link>
                <ThemeToggler />
            </div>
            <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
                <div className="w-11/12 max-w-md">
                    <LoginForm className="bg-card p-4 md:p-6 rounded-2xl shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Login;