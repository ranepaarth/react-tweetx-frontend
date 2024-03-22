import React, { useState } from "react";
import Followers from "./Followers";
import Following from "./Following";
import Tweets from "./Tweets";

const ProfileSection = ({ tweets, followers, followings }) => {
  const tabs = ["tweets", "followers", "following"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
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
                activeTab === tab ? "font-semibold text-neutral-800" : ""
              } w-full capitalize py-3`}
              onClick={() => setActiveTab(tabs[i])}
            >
              {tab}
            </button>
            <p
              className={`w-full ${
                activeTab === tabs[i]
                  ? "border-b border-black"
                  : "border-b border-neutral-300"
              }`}
            ></p>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3 z-0">
        {activeTab === tabs[0] && <Tweets tweets={tweets} />}
        {activeTab === tabs[1] && <Followers followers={followers} />}
        {activeTab === tabs[2] && <Following followings={followings} />}
      </div>
    </>
  );
};

export default ProfileSection;
