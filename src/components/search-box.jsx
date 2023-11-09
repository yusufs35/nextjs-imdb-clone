"use client";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) return;

    router.push(`/search/${searchText}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-6xl mx-auto justify-between items-center px-5"
      >
        <input
          type="text"
          placeholder="Search something..."
          className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        disabled={!searchText}
          type="submit"
          className="text-amber-600 disabled:text-gray-400"
          
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
