"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-[20px] flex flex-col lg:flex  justify-between bg-[#182237] rounded-[10px]">
      <div className="text-bold text-[24px] capitalize text-left p-4">
        Car Rental
      </div>
      {/* <div className="flex items-center gap-[20px] justify-between">
        <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px]">
          <MdSearch />
          <input type="text" placeholder="Search..." className="" />
        </div>
        <div className="flex  lg:inline-flex gap-[10]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
