import { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
    title: "",
    description: ""
};


const DashboardPage = () => {

    redirect("/dashboard/profile");

    return null;
};

export default DashboardPage;