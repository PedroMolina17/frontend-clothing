import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between border-b p-1 text-[#393939]">
        <div className="flex gap-2">
          <span>Login</span>
          <span>Register</span>
        </div>
        <div>
          <div className="flex gap-2">
            <span>Login</span>
            <span>Register</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 pb-8 border-b ">
        <div className="flex gap-32 max-md:gap-12">
          <h1 className="text-4xl font-bold">
            <Link href={"/"}>eShop</Link>
          </h1>
          <ul className="flex gap-2 items-center text-xl">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 text-xl">
          <FaShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
