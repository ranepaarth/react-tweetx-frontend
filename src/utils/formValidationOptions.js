export const formValidation = {
  name: {
    required: "Please provide your name",
  },
  email: {
    required: "Please provide your email address",
    pattern: {
      value: /[a-z0-9.]+@+[a-z]+\.+[a-z]{2,3}/g,
      message: "Email is invalid",
    },
  },
  password: {
    required: "Password cannot be left blank",
  },
  confirmPassword: {
    required: "This field cannot be left empty",
  },
};
