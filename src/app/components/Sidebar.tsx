"use client";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiMiniUsers } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/admin",
      icon: IoHomeOutline,
      icon2: IoHomeSharp,
      label: "Home",
    },
    {
      href: "/admin/products",
      icon: TbUsers,
      icon2: HiMiniUsers,
      label: "Products",
    },
    {
      href: "/",
      icon: HiOutlineDocumentReport,
      icon2: BiSolidReport,
      label: "Client",
    },
    {
      href: "/admin/a",
      icon: TbUsers,
      icon2: HiMiniUsers,
      label: "Users",
    },
    {
      href: "/admin/ac",
      icon: HiOutlineDocumentReport,
      icon2: BiSolidReport,
      label: "Reports",
    },
  ];

  return (
    <>
      <div className="flex flex-col absolute left-0 w-96 h-full bg-[#393939] p-2 gap-2 ">
        <p className="text-2xl font-bold text-white mt-8">Pedro Molina</p>
        {navLinks.map((navLink, index) => {
          const Icon = pathname === navLink.href ? navLink.icon2 : navLink.icon;
          return (
            <div
              key={index}
              className={`w-full h-14 flex items-center p-2 text-lg rounded-md ${
                pathname === navLink.href
                  ? "text-white bg-[#868686]"
                  : "hover:text-white text-[#afafaf] transition-colors"
              }`}
            >
              <li className="flex items-center">
                <Link href={navLink.href} className="flex items-center gap-2">
                  <Icon className="text-xl" />
                  <span>{navLink.label}</span>
                </Link>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
