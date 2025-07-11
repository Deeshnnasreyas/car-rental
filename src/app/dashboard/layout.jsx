import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";


const Layout=({children})=> {
    return (
      <div className="flex">
        <div className="flex-1 bg-[#182237] p-2 lg:p-[20px]">
          <Sidebar />
        </div>
        <div className="flex-4 p-[20px]">
          <Navbar />
          {children}
        </div>
      </div>
    );
}
export default Layout
