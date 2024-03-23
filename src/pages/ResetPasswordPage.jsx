import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import FormBody from "../components/FormComponents/FormBody";
import FormContainer from "../components/FormComponents/FormContainer";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormPasswordInput from "../components/FormComponents/FormPasswordInput";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";
import { useResetPasswordMutation } from "../features/api/authApiSlice";
import { formValidation } from "../utils/formValidationOptions";

const ResetPasswordPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const onFormSubmit = async (data) => {
    try {
      const response = await resetPassword(data);
      console.log(response);
      if (response?.data?.success) {
        console.log(response);
        reset();
        toast.success("Password reset successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormNavigationButton path={"login"} text={"Log in"} />
      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"reset password"} />
          </div>
          <FormBody handleSubmit={handleSubmit} onFormSubmit={onFormSubmit}>
            <FormRow error={errors?.email?.message}>
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
              {true ? (
                <p className="font-normal">
                  <Link
                    to="/auth/login"
                    className="text-pink-500 font-medium hover:underline transition-transform ease-in-out duration-200"
                  >
                    Login
                  </Link>{" "}
                  to continue
                </p>
              ) : (
                ""
              )}
            </div>
          </FormBody>
        </FormContainer>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
