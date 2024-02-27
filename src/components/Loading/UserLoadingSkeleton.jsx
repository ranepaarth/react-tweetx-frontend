import React from "react";

const UserLoadingSkeleton = () => {
  return (
    <div className="w-full">
      {[...Array(20)].map((_, i) => (
        <article className="w-full flex items-start justify-between animate-pulse px-3 py-6" key={i}>
          <div className="flex items-center gap-4">
            <p className="w-[4.5rem] aspect-square rounded-full bg-neutral-300 p-1"></p>
            <div className="flex flex-col gap-2">
              <p className="w-32 aspect-auto bg-neutral-300 h-6"></p>
              <p className="w-56 aspect-auto bg-neutral-300 h-5"></p>
            </div>
          </div>
          <div>
            <button className="w-24 h-8 bg-neutral-300 rounded"></button>
          </div>
        </article>
      ))}
      ;
    </div>
  );
};

export default UserLoadingSkeleton;
