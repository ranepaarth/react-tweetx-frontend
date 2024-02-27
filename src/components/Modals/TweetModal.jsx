import React from "react";
import { useSelector } from "react-redux";
import { getIsTweetUpdating, getShowModalStatus } from "../../slice/usersSlice";
import FormContainer from "../FormComponents/FormContainer";
import FormHeader from "../FormComponents/FormHeader";
import Modal from "./Modal";
import TweetModalCloseBtn from "./TweetModalCloseBtn";
import TweetUpdateForm from "./TweetUpdateForm";

const TweetModal = () => {
  const isUpdating = useSelector(getIsTweetUpdating);
  const showModal = useSelector(getShowModalStatus);

  return (
    <Modal showModal={showModal} isTweet={true}>
      <article className="bg-neutral-50 py-4 px-8 rounded w-[90%] max-w-[650px] z-50">
        <TweetModalCloseBtn />
        <FormContainer>
          <div className="mb-10">
            <FormHeader
              heading={isUpdating ? "Update Tweet" : "Create Tweet"}
            />
          </div>
          <TweetUpdateForm />
        </FormContainer>
      </article>
    </Modal>
  );
};

export default TweetModal;
