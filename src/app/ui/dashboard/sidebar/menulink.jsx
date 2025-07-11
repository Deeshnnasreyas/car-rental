"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center rounded-[10px] p-[15px] gap-[10px] hover:bg-[#2e374a] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      <span className="hidden lg:inline-block">{item.title}</span>
    </Link>
  );
};

export default MenuLink;
