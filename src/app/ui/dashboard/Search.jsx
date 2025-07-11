"use client";

import { MdSearch } from "react-icons/md";
const Search = ({ placeholder, setSearchTerm, searchTerm }) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-[10px] w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-[var(--text)] outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
