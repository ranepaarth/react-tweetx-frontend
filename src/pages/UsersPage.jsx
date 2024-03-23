import React from "react";
import { useSelector } from "react-redux";
import UserLoadingSkeleton from "../components/Loading/UserLoadingSkeleton";
import LogoText from "../components/NavBar/LogoText";
import NoUsers from "../components/UsersPage/NoUsers";
import SearchInput from "../components/UsersPage/SearchInput";
import SingleUser from "../components/UsersPage/SingleUser";
import { useGetAllUsersQuery } from "../features/api/usersApiSlice";
import { getCurrentUser } from "../features/slice/usersSlice";

const UsersPage = () => {
  // changing the first query to undefined resolved the error for the createSelector usersResult in the usersApiSlice
  const {
    data: users,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllUsersQuery(null, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const currentUser = useSelector(getCurrentUser);

  let content;
  if (isLoading) content = <UserLoadingSkeleton />;

  if (isSuccess) {
    const { ids } = users;

    content = ids.map((userId) => {
      if (currentUser?._id === userId) return;
      else return <SingleUser userId={userId} key={userId} />;
    });
  }
  if (isError) {
    console.log({ error });
  }

  if (!isLoading && users?.length === 0) {
    content = users?.length === 0 && <NoUsers />;
  }

  if (!isLoading && users?.length > 0) {
    content = users?.map((user, i) => {
      return <SingleUser key={user?._id} userId={user._id} />;
    });
  }

  return (
    <>
      <div className="flex items-center w-full justify-between gap-10 ">
        <span className="md:hidden block">
          <LogoText />
        </span>
        <div className="w-full md:hidden">
          <SearchInput />
        </div>
      </div>
      <section className="flex flex-col items-center  w-full">
        {content}
      </section>
    </>
  );
};

export default UsersPage;
