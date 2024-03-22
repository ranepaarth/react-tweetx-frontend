import { debounce } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircle, IoSearchSharp } from "react-icons/io5";
import { useGetSearchUsersQuery } from "../../features/api/usersApiSlice";
import SearchUserCard from "./SearchUserCard";

const SearchInput = () => {
  const { register, setValue, getValues } = useForm();

  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: searchedUsers } = useGetSearchUsersQuery(searchTerm, {
    skip: searchTerm === "",
    refetchOnMountOrArgChange: true,
  });

  const onSearch = (userName) => {
    setSearchTerm(userName);
  };

  const handleChange = useCallback(
    debounce((e) => {
      const { searchTerm } = getValues();
      onSearch(searchTerm);
    }, 1000),
    [onSearch]
  );

  const handleClearSearch = () => {
    setValue("searchTerm", "");
    setSearchTerm("");
  };

  let content;
  if (searchTerm === "" && searchedUsers?.length === 0) {
    content = "";
  }

  console.log({ searchedUsers });

  if (searchTerm !== "" && searchedUsers?.length > 0) {
    content = searchedUsers.map((user) => (
      <SearchUserCard user={user} key={user._id} />
    ));
  }

  if (searchTerm && searchedUsers?.length === 0) {
    content = (
      <p className="flex items-center justify-center font-bold text-neutral-700">
        No users found
      </p>
    );
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.value !== inputRef.current) {
        setValue("searchTerm", "");
        setSearchTerm("");
      }
    });
  });

  return (
    <div className="w-full grid place-items-center relative" ref={inputRef}>
      <form
        className="bg-neutral-100 px-4 py-1 rounded flex items-center gap-2 w-full max-w-[450px] border shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full flex items-center gap-2">
          <div className="text-lg text-neutral-400 py-">
            <IoSearchSharp />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 bg-transparent caret-neutral-800 text-neutral-600 outline-none placeholder:italic placeholder:text-sm flex items-center"
            {...register("searchTerm", {
              onChange: (e) => handleChange(e),
            })}
          />
        </div>
        <button
          type="button"
          className="text-neutral-400 text-lg hover:text-pink-500 transition-colors ease-in-out duration-200"
          onClick={handleClearSearch}
        >
          <IoCloseCircle />
        </button>
      </form>

      {searchTerm && searchedUsers && (
        <div className="absolute top-12 bg-neutral-100 rounded-lg w-full flex flex-col max-h-[300px] overflow-auto shadow-md z-20 max-w-[500px] p-2 border">
          <p className="py-2 px-4 font-medium text-sm text-neutral-500">
            People{" "}
            <span className="text-xs border px-1 rounded-xl bg-blue-50 text-neutral-600">
              {searchedUsers?.length}
            </span>
          </p>
          {searchedUsers && content}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
