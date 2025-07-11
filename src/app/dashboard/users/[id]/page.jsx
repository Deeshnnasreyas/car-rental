import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
//   const user = await fetchUser(id);
const user=""
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[var(--bgSoft)] p-5 rounded-[10px] font-bold text-[var(--textSoft)] h-max">
        <div className="w-full h-[300px] relative rounded-[10px] overflow-hidden mb-5">
          <Image
            className="bg-cover"
            src="/images/noavatar.png"
            // src={user.img || "/noavatar.png"}
            alt=""
            fill
          />
        </div>
       Deeshna
      </div>
      <div className="flex-[3] bg-[var(--bgSoft)] p-5 rounded-[10px]">
        <form
          //   action={updateUser}
          className="flex flex-col"
        >
          <input
            type="hidden"
            name="id"
            value={user.id}
            className="p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
          />
          <div className="flex w-full gap-[20px]">
            <div className="w-1/2 flex-col ">
              {" "}
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder={user.username}
                className="p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2 w-full"
              />
            </div>
            <div className="w-1/2 flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                className="p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2 w-full"
              />
            </div>
          </div>
          <div className="flex w-full gap-[20px]">
            <div className="w-1/2 flex-col ">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
              />
            </div>
            <div className="w-1/2 flex-col ">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder={user.phone}
                className="w-full p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
              />
            </div>
          </div>

          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            className="p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
          />
          <div className="flex w-full gap-[20px]">
            <div className="w-1/2 flex-col ">
              <label>Is Admin?</label>
              <select
                name="isAdmin"
                id="isAdmin"
                className="w-full p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
              >
                <option
                  value={true}
                  // selected={user.isAdmin}
                >
                  Yes
                </option>
                <option
                  value={false}
                  // selected={!user.isAdmin
                >
                  No
                </option>
              </select>
            </div>
            <div className="w-1/2 flex-col ">
              <label>Is Active?</label>
              <select
                name="isActive"
                id="isActive"
                className="w-full p-5 border-2 border-[#2e374a] rounded bg-[var(--bg)] text-[var(--text)] my-2"
              >
                <option
                  value={true}
                  // selected={user.isActive}
                >
                  Yes
                </option>
                <option
                  value={false}
                  // selected={!user.isActive}
                >
                  No
                </option>
              </select>
            </div>
          </div>
          <button className="w-full p-5 bg-teal-500 text-[var(--text)] border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
