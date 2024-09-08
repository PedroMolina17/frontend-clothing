import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main className=" text-[#393939]">
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default HomeLayout;
