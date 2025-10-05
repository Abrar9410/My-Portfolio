import { redirect } from "next/navigation";



const DashboardPage = () => {

    redirect("/dashboard/profile");

    return null;
};

export default DashboardPage;