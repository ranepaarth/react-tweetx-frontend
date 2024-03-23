import React from "react";
import ProfileSectionLoading from "./ProfileSectionLoading";

const ProfilePageLoading = () => {
  return (
    <div className="w-full">
      <div className="flex items-start gap-6 py-2 w-full flex-shrink">
        <p className="w-28 aspect-square rounded-full bg-neutral-300 p-1"></p>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="w-32 aspect-auto bg-neutral-300 h-8"></p>
              <p className="w-56 aspect-auto bg-neutral-300 h-6"></p>
            </div>
          </div>
        </div>
      </div>
      <ProfileSectionLoading />
    </div>
  );
};

export default ProfilePageLoading;
