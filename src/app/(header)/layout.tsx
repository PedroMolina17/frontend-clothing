import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main className="px-12 max-md:px-2 text-[#393939]">
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default HomeLayout;
