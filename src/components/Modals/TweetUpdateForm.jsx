import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateTweetMutation,
  useUpdateTweetMutation,
} from "../../slice/authApiSlice";
import {
  getIsTweetUpdating,
  getShowModalStatus,
  getTweetToUpdate,
  getUserData,
  toggleShowModal,
} from "../../slice/usersSlice";
import FormRow from "../FormComponents/FormRow";
import FormSubmitButton from "../FormComponents/FormSubmitButton";
import TweetModalDate from "./TweetModalDate";

const TweetUpdateForm = () => {
  const tweetToUpdate = useSelector(getTweetToUpdate);
  const showModal = useSelector(getShowModalStatus);
  const isUpdating = useSelector(getIsTweetUpdating);
  const currUser = useSelector(getUserData);
  const [createTweet] = useCreateTweetMutation();
  const [updateTweet] = useUpdateTweetMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onTweetSubmit = async (data) => {
    try {
      if (tweetToUpdate?.content === data?.content) {
        dispatch(toggleShowModal());
        return;
      }
      const response = isUpdating
        ? await updateTweet({ tweetId: tweetToUpdate?._id, ...data })
        : await createTweet({ userId: currUser?.id, ...data });
      // console.log({ response });
      dispatch(toggleShowModal());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUpdating) setValue("content", tweetToUpdate?.content);
  }, [showModal]);

  const onFormError = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onTweetSubmit, onFormError)}
      className="w-full"
    >
      <FormRow error={errors?.content?.message}>
        <textarea
          name="tweetContent"
          id="tweetContent"
          rows="5"
          className="resize-none w-full bg-transparent outline-none border-none"
          autoFocus
          {...register("content", {
            required: "Please enter something",
          })}
        ></textarea>
      </FormRow>
      <TweetModalDate
        createdAt={tweetToUpdate?.createdAt}
        updatedAt={tweetToUpdate?.updatedAt}
      />
      <div className="my-4">
        <FormSubmitButton text={isUpdating ? "Update Tweet" : "Create Tweet"} />
      </div>
    </form>
  );
};

export default TweetUpdateForm;
