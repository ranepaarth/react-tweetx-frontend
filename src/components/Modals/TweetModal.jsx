import React from "react";
import { useSelector } from "react-redux";
import {
  getIsTweetUpdating,
  getShowTweetModal,
} from "../../features/slice/tweetsSlice";
import FormContainer from "../FormComponents/FormContainer";
import FormHeader from "../FormComponents/FormHeader";
import Modal from "./Modal";
import TweetModalCloseBtn from "./TweetModalCloseBtn";
import TweetUpdateForm from "./TweetUpdateForm";

const TweetModal = () => {
  const showTweetModal = useSelector(getShowTweetModal);

  return (
    <Modal showModal={showTweetModal} isTweet={true}>
      <article className="bg-neutral-50 py-4 px-8 rounded w-[90%] max-w-[650px] z-50">
        <TweetModalCloseBtn />
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"Update Tweet"} />
          </div>
          <TweetUpdateForm />
        </FormContainer>
      </article>
    </Modal>
  );
};

export default TweetModal;
