import Banner from "@/components/Banner";
import Certifications from "@/components/Certifications";
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
    <>
      <Banner />
      <WhoIAm />
      <TechnicalSkills/>
      <FeaturedProjects/>
      <Certifications/>
    </>
  );
};

export default HomePage;