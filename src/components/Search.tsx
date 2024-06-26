import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="mt-1.5 flex items-center gap-4 rounded-full bg-[#202327] px-5 py-2.5">
      <SearchIcon sx={{ color: "#6f6f6f" }} />

      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[#202327] outline-none placeholder:text-[#6f6f6f]"
      />
    </div>
  );
};

export default Search;
