import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import FormBody from "../components/FormComponents/FormBody";
import FormContainer from "../components/FormComponents/FormContainer";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormPasswordInput from "../components/FormComponents/FormPasswordInput";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";
import { useRegisterUserMutation } from "../features/api/authApiSlice";
import { formValidation } from "../utils/formValidationOptions";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

  const onFormSubmit = async (data) => {
    try {
      await registerUser(data).unwrap();
      toast.success("Account created successfully", {
        duration: 5000,
      });
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <>
      <FormNavigationButton text="Login" path={"login"} />
      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"create account"} />
          </div>
          <FormBody handleSubmit={handleSubmit} onFormSubmit={onFormSubmit}>
            <FormRow error={errors?.fullName?.message}>
              <FormInput
                placeholder={"Full Name"}
                type={"text"}
                autoFocus={true}
                register={register("fullName", formValidation.fullName)}
              />
            </FormRow>
            <FormRow error={errors?.email?.message}>
              <FormInput
                placeholder={"email"}
                type={"text"}
                register={register("email", formValidation.email)}
              />
            </FormRow>
            <FormRow error={errors?.userName?.message}>
              <FormInput
                placeholder={"Username"}
                type={"text"}
                register={register("userName", formValidation.userName)}
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
                text={"Create account"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            </div>
          </FormBody>
        </FormContainer>
      </div>
    </>
  );
};

export default RegisterPage;
