import React from "react";
import { useSelector } from "react-redux";
import UserLoadingSkeleton from "../components/Loading/UserLoadingSkeleton";
import LogoText from "../components/NavBar/LogoText";
import NoUsers from "../components/UsersPage/NoUsers";
import SingleUser from "../components/UsersPage/SingleUser";
import { useGetAllUsersQuery } from "../slice/authApiSlice";
import { getUserData } from "../slice/usersSlice";

const UsersPage = () => {
  const currUser = useSelector(getUserData);
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  let content;
  if (isLoading) content = <UserLoadingSkeleton />;

  if (!isLoading && allUsers?.length === 0) {
    content = allUsers?.length === 0 && <NoUsers />;
  }

  if (!isLoading && allUsers?.length > 0) {
    content = allUsers?.map((user, i) => (
      <React.Fragment key={user?._id}>
        {currUser?.id === user?._id ? (
          ""
        ) : (
          <SingleUser key={user?._id} userId={user._id} user={user} />
        )}
      </React.Fragment>
    ));
  }

  return (
    <>
      <div className="flex items-center w-full justify-between gap-10">
        <span className="md:hidden block">
          <LogoText />
        </span>
      </div>
      <section className="flex flex-col items-center mt-5">{content}</section>
    </>
  );
};

export default UsersPage;
