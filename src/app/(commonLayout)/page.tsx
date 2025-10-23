import Banner from "@/components/Banner";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Abrar Shahriar",
  description: "This is homepage of the portfolio website of Abrar Shahriar, a full-stack web developer."
};


const HomePage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;