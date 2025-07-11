const AddUserPage = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] mt-5">
      <form
        //   action={addUser}
        className="flex flex-wrap gap-[20px]"
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
        />
        <input
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2
           border-[#2e374a] rounded mb-[30px]"
        >
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="w-[45%] p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
        >
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          className="w-full p-[20px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded mb-[30px]"
          name="address"
          id="address"
          rows="8"
          placeholder="Address"
        ></textarea>
        <button
          type="submit"
          className="float-right p-[20px] bg-teal-500 text-[var(--text)] border-none rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
