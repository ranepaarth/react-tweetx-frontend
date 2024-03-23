import React from "react";
import { useForm } from "react-hook-form";
import { IoMdInformationCircle } from "react-icons/io";
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
import { useLoginUserMutation } from "../features/api/authApiSlice";
import { setAccessToken, setCurrentUserId } from "../features/slice/authSlice";
import { setCurrentUserName } from "../features/slice/usersSlice";
import useCustomPersist from "../hooks/useCustomPersist";
import { formValidation } from "../utils/formValidationOptions";

const LoginPage = () => {
  const [persist, setPersist] = useCustomPersist();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [loginUser, { error }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {
    try {
      const result = await loginUser(data).unwrap();
      console.log({ result });
      dispatch(setCurrentUserName(result.userExist._id));
      dispatch(setAccessToken(result.accessToken));
      dispatch(setCurrentUserId(result.userId));
      setPersist((prev) => !prev);
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const password = watch("password");

  return (
    <div>
      <FormNavigationButton text={"Create account"} path={"register"} />

      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"Login"} />
          </div>
          <FormBody handleSubmit={handleSubmit} onFormSubmit={onFormSubmit}>
            <FormRow error={errors?.userName?.message}>
              <FormInput
                placeholder={"Email/Username"}
                type={"text"}
                autoFocus={true}
                register={register("userName")}
              />
            </FormRow>
            <FormRow error={errors?.password?.message}>
              <FormPasswordInput
                register={register("password", formValidation.password)}
              />
            </FormRow>
            <div
              className={`text-xs mt-1 text-red-500 font-medium ${
                error ? "flex" : "hidden"
              } items-center gap-1 pb-2`}
            >
              <span>
                <IoMdInformationCircle />
              </span>
              <span>{password?.length ? error?.data?.message : ""}</span>
            </div>
            <footer className="w-full flex justify-between items-center">
              <Link
                to={"/auth/reset"}
                className="text-sm capitalize font-medium text-neutral-600 hover:underline"
              >
                Forgot password?
              </Link>
              <FormSubmitButton text={"Login"} />
            </footer>
          </FormBody>

          <form className="my-3">
            <label htmlFor="persist">
              <input
                type="checkbox"
                id="persist"
                checked={persist}
                onChange={() => setPersist((prev) => !prev)}
              />{" "}
              <span className="text-sm font-semibold text-neutral-700">
                Accept Cookies
              </span>
            </label>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default LoginPage;
