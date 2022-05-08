const showHidePassword = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

export default showHidePassword;
