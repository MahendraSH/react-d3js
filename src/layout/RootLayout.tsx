import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className=" bg-background text-foreground">
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
      <span className=" fixed bottom-8 right-5 ">
      </span>
      <Footer />
    </div>
  );
};

export default RootLayout;
