import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-96 pt-16 p-4 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
