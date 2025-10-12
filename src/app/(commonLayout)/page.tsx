import { Button } from "@/components/ui/button";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Abrar Shahriar",
  description: ""
};


const HomePage = () => {
  return (
    <div>
      <Button className="text-foreground bg-portfolio">HomePage</Button>
    </div>
  );
};

export default HomePage;