import { debounce } from "lodash";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ onSearch }) => {
  const { register } = useForm();

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      // console.log(searchTerm);
      onSearch(searchTerm);
    }, 1000),
    [onSearch]
  );

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };
  
  return (
    <form className="w-full flex justify-center">
      <div className="bg-neutral-200 px-4 py-2 rounded flex items-center gap-2 w-full max-w-[450px]">
        <span className="text-lg text-neutral-600">
          <IoSearchSharp />
        </span>
        <input
          type="text"
          className="w-full h-8 bg-transparent caret-neutral-800 text-neutral-800 outline-none"
          autoFocus
          {...register("searchParam", {
            onChange: (e) => handleChange(e),
          })}
        />
      </div>
    </form>
  );
};

export default SearchInput;
