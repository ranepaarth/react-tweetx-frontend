import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateTweetMutation,
  useUpdateTweetMutation,
} from "../../features/api/tweetsApiSlice";
import {
  getIsTweetUpdating,
  getShowTweetModal,
  getTweetToUpdate,
  toggleShowModal,
} from "../../features/slice/tweetsSlice";
import CstmCircularProgressBar from "../CustomComponent/CstmCircularProgressBar";
import FormRow from "../FormComponents/FormRow";
import FormSubmitButton from "../FormComponents/FormSubmitButton";
import TweetModalDate from "./TweetModalDate";

const TweetUpdateForm = () => {
  const tweetToUpdate = useSelector(getTweetToUpdate);
  const showTweetModal = useSelector(getShowTweetModal);
  const isUpdating = useSelector(getIsTweetUpdating);
  const [updateTweet] = useUpdateTweetMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    reValidateMode: "onChange",
  });

  const wordCount = watch("content");

  const onTweetSubmit = async (data) => {
    try {
      if (tweetToUpdate?.content === data?.content) {
        dispatch(toggleShowModal());
        return;
      }
      const response = await updateTweet({
        tweetId: tweetToUpdate?._id,
        content: data.content,
      });
      dispatch(toggleShowModal());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUpdating) setValue("content", tweetToUpdate?.content);
  }, [showTweetModal]);


  return (
    <form
      onSubmit={handleSubmit(onTweetSubmit)}
      className="w-full"
    >
      <FormRow
        error={
          errors?.content?.type === "validate"
            ? "Cannot exceed 200 characters."
            : errors?.content?.message
        }
      >
        <textarea
          name="tweetContent"
          id="tweetContent"
          rows="5"
          className="resize-none w-full bg-transparent outline-none border-none text-sm md:text-base"
          autoFocus
          {...register("content", {
            required: "Please enter something",
            validate: (value) => value.length <= 200,
          })}
        ></textarea>
      </FormRow>

      <div className="flex items-center justify-between">
        <CstmCircularProgressBar wordCount={wordCount} />
        <TweetModalDate
          createdAt={tweetToUpdate?.createdAt}
          updatedAt={tweetToUpdate?.updatedAt}
        />
      </div>

      <div className="my-4">
        <FormSubmitButton text={isUpdating ? "Update Tweet" : "Create Tweet"} />
      </div>
    </form>
  );
};

export default TweetUpdateForm;
