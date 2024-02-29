import React, { useState } from "react";
import UserLoadingSkeleton from "../components/Loading/UserLoadingSkeleton";
import LogoText from "../components/NavBar/LogoText";
import NoUsers from "../components/UsersPage/NoUsers";
import SearchInput from "../components/UsersPage/SearchInput";
import SingleUser from "../components/UsersPage/SingleUser";
import UserNotFound from "../components/UsersPage/UserNotFound";
import {
  useGetAllUsersQuery,
  useGetSearchUserQuery,
} from "../slice/authApiSlice";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });
  const { data: searchUserResult, isLoading: isSearching } =
    useGetSearchUserQuery(searchTerm, {
      skip: searchTerm === "",
    });
  // console.log("searchUserResult");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    // console.log("search term:", searchTerm);
  };

  let content;
  if (isLoading && searchTerm === "") content = <UserLoadingSkeleton />;

  if (searchTerm && isSearching) content = <UserLoadingSkeleton />;

  if (!isLoading && allUsers?.length === 0) {
    content = allUsers?.length === 0 && <NoUsers />;
  }

  if (!isLoading && allUsers?.length > 0) {
    content =
      searchTerm === ""
        ? allUsers?.map((user, i) => (
            <SingleUser key={user?._id} userId={user._id} />
          ))
        : searchUserResult?.map((user, i) => (
            <SingleUser key={user?._id} userId={user._id} />
          ));
  }

  if (searchTerm && searchUserResult?.length === 0) content = <UserNotFound />;

  return (
    <>
      <div className="flex items-center w-full justify-between gap-10">
        <span className="md:hidden block">
          <LogoText />
        </span>
        <SearchInput onSearch={handleSearch} />
      </div>
      <section className="flex flex-col items-center mt-5">{content}</section>
    </>
  );
};

export default UsersPage;
