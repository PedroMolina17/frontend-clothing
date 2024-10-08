import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 ml-96 pt-24 p-4 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
