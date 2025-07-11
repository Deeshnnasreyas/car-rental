
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const { count, users } =""

  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-[#5d57c9] text-[var(--text)] border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <span>Deeshna</span>
              </div>
            </td>
            <td>deeshn@gmail.com</td>
            <td>10/05/2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className="flex gap-[10px]">
                <Link
                                   href={`/dashboard/users/${"test"}`}
                >
                  <button className="px-2.5 py-1.5 rounded text-[var(--text)] border-none cursor-pointer bg-teal-400">
                    View
                  </button>
                </Link>
                <form
                // action={deleteUser}
                >
                  <input type="hidden" name="id" value="" />
                  <button className="px-2.5 py-1.5 rounded text-[var(--text)] border-none cursor-pointer bg-red-400">
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
