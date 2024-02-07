import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormBody from "../components/FormComponents/FormBody";
import FormContainer from "../components/FormComponents/FormContainer";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormPasswordInput from "../components/FormComponents/FormPasswordInput";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";
import { useResetPasswordMutation } from "../slice/authApiSlice";
import { formValidation } from "../utils/formValidationOptions";

const ResetPasswordPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [resetPassword, { isLoading, isSuccess, error }] =
    useResetPasswordMutation();

  const onFormSubmit = async (data) => {
    console.log(data);
    const response = await resetPassword(data).unwrap();
    toast.success("Password reset successful", {
      duration: 4000,
    });
    reset();
    if (error) {
      // console.log(error);
    }
  };

  const onFormError = (error) => {
    // console.log(error);
  };

  return (
    <div>
      {isSuccess && (
        <div className="flex flex-col gap-4">
          <FormNavigationButton path={"/user/login"} text={"Log in"} />
        </div>
      )}
      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"reset password"} />
          </div>
          <FormBody
            handleSubmit={handleSubmit}
            onFormSubmit={onFormSubmit}
            onFormError={onFormError}
          >
            <FormRow error={errors?.email?.message || error?.data?.message}>
              <FormInput
                placeholder={"email"}
                type={"text"}
                autoFocus={true}
                register={register("email", formValidation.email)}
              />
            </FormRow>
            <FormRow error={errors?.password?.message}>
              <FormPasswordInput
                register={register("password", formValidation.password)}
              />
            </FormRow>
            <FormRow error={errors?.confirmPassword?.message}>
              <FormInput
                placeholder={"confirm password"}
                type={"password"}
                register={register("confirmPassword", {
                  ...formValidation.confirmPassword,
                  validate: (value) => {
                    if (watch("password") !== value)
                      return "Those passwords did'nt match. Try again";
                  },
                })}
              />
            </FormRow>
            <div className="flex justify-between items-center w-full">
              <FormSubmitButton
                text={"Reset password"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            </div>
          </FormBody>
        </FormContainer>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
