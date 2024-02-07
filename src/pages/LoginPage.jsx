import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormBody from "../components/FormComponents/FormBody";
import FormContainer from "../components/FormComponents/FormContainer";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormPasswordInput from "../components/FormComponents/FormPasswordInput";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";
import { useLoginUserMutation } from "../slice/authApiSlice";
import { setCredentials } from "../slice/usersSlice";
import { formValidation } from "../utils/formValidationOptions";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {
    try {
      const result = await loginUser(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/");
    } catch (error) {
      // console.log(error)
      toast.error(error?.data?.message, {
        duration: 5000,
      });
    }
  };

  const onFormError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <FormNavigationButton text={"Create account"} path={"register"} />

      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"Login"} />
          </div>
          <FormBody
            handleSubmit={handleSubmit}
            onFormSubmit={onFormSubmit}
            onFormError={onFormError}
          >
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
            <footer className="w-full flex justify-between items-center">
              <Link
                to={"/user/reset"}
                className="text-sm capitalize font-medium text-neutral-600 hover:underline"
              >
                Forgot password?
              </Link>
              <FormSubmitButton text={"Login"} />
            </footer>
          </FormBody>
        </FormContainer>
      </div>
    </div>
  );
};

export default LoginPage;
