export const formValidation = {
  fullName: {
    pattern: {
      value: /^[A-Za-z]+(?:[ ][A-Za-z]+)*$/,
      message: "Must start with a letter (A-Z) and can contain blank spaces.",
    },
  },
  userName: {
    pattern: {
      value: /[a-zA-Z][a-zA-Z0-9_.]{2,29}$/,
      message:
        "Username must be at least 3 characters long and can contain letters (a-z), numbers (0-9), underscores(_), and periods(.)",
    },
    minLength: {
      value: 2,
      message:
        "Username must be at least 3 characters long and can contain letters (a-z), numbers (0-9), underscores(_), and periods(.)",
    },
    maxLength: {
      value: 30,
      message: "maximum character limit reached",
    },
  },
  email: {
    pattern: {
      value: /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-z]{2,6}$/,
      message:
        "Must be a valid email consisting of letters (a-z), numbers (0-9), periods(.) are allowed.",
    },
  },
  password: {
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must be at least 8 characters long and must contain uppercase (A-Z) and lowercase (a-z) letters, digits (0-9), and special characters (@$!%*?&).",
    },
  },
  confirmPassword: {
    // required: "This field cannot be left empty",
  },
};
