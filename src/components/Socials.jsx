import React from "react";
import { FaCode, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Socials = () => {
  const sourceCode = "https://github.com/ranepaarth/react-tweetx-frontend";
  const githubProfile = "https://github.com/ranepaarth";
  const linkedInProfile = "https://linkedin.com/in/paarth-rane";
  return (
    <div className="flex md:flex-col md:space-y-4 text-xl bg-white shadow-md p-2 rounded-md text-neutral-600 items-center w-fit space-x-4 md:space-x-0">
      <a
        href={sourceCode}
        target={"_blank"}
        className="hover:text-neutral-900"
        title="Source code"
      >
        <FaCode />
      </a>
      <a
        href={githubProfile}
        target={"_blank"}
        className="hover:text-neutral-900"
        title="Github"
      >
        <IoLogoGithub />
      </a>
      <a
        href={linkedInProfile}
        target={"_blank"}
        className="hover:text-neutral-900"
        title="Linkedin"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Socials;
