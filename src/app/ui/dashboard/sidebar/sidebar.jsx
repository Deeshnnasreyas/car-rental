
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle, MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";
import MenuLink from "./menulink";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className="sticky top-[10px] lg:top-[40px]">
      <div className="flex items-left  gap-[20px] mb-[20px]">
        <Image
          className="hidden lg:inline-block rounded-full bg-cover"
          src="/images/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-[12px]">Admin</span>
        </div>
      </div>
    
      <ul className="">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-[13px] font-bold">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <div>
        <button
       
          className="p-[20px] flex items-center cursor-pointer hover:text-white-50 gap-[20px] hover:rounded-md hover:bg-gray-400"
        >
          <MdLogout />
          <span className="hidden lg:inline-block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
