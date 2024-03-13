"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`p-1 ${pathName === link.url && "bg-black text-[#DCF28C] h-full flex text-center items-center justify-center w-32"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;