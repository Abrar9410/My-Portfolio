"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowBigLeft } from "lucide-react";


const BackButton = ({className}: {className?: string}) => {

    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            className={`cursor-pointer bg-foreground text-background hover:bg-portfolio flex justify-center items-center gap-1 ${className}`}
        >
            <ArrowBigLeft size={16} /> Return
        </Button>
    );
};

export default BackButton;