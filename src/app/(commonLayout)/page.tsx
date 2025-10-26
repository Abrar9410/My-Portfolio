import Banner from "@/components/Banner";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechnicalSkills from "@/components/TechnicalSkills";
import WhoIAm from "@/components/WhoIAm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Abrar Shahriar",
  description: "This is homepage of the portfolio website of Abrar Shahriar, a full-stack web developer."
};


const HomePage = () => {
  return (
    <div>
      <Banner />
      <WhoIAm />
      <TechnicalSkills/>
      <FeaturedProjects/>
    </div>
  );
};

export default HomePage;