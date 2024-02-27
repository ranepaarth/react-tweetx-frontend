import React, { useState } from "react";
import { useGetSingleUserQuery } from "../../../slice/authApiSlice";
import Tweets from "../Tweets";
import Followers from "./Followers";
import Following from "./Following";

const ProfileSection = ({ userId }) => {
  const tabs = ["tweets", "followers", "following"];
  const [active, setActive] = useState(tabs[0]);
  const { data: singleUser, isLoading } = useGetSingleUserQuery(userId);

  console.log({ singleUser, file: "ProfileSection" });

  return (
    <section>
      <div className="grid grid-cols-3 text-neutral-600 mt-5 sticky top-0 z-10 bg-neutral-50">
        <p className="border-b border-neutral-300 col-span-3"></p>
        {tabs.map((tab, i) => (
          <span
            className="col-span-1 text-center hover:bg-neutral-200/60 transition-colors ease-in-out duration-200"
            key={i}
          >
            <button
              type="button"
              className={`${
                active === tab ? "font-semibold text-neutral-800" : ""
              } w-full capitalize py-3`}
              onClick={() => setActive(tabs[i])}
            >
              {tab}
            </button>
            <p
              className={`w-full ${
                active === tabs[i]
                  ? "border-b border-black"
                  : "border-b border-neutral-300"
              }`}
            ></p>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3 z-0 px-2">
        {active === tabs[0] && <Tweets userId={userId} />}
        {active === tabs[1] && (
          <Followers followers={singleUser?.followers} isLoading={isLoading} />
        )}
        {active === tabs[2] && (
          <Following
            followings={singleUser?.followings}
            isLoading={isLoading}
          />
        )}
      </div>
    </section>
  );
};

export default ProfileSection;
