import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

// import store

import useStyles from "../store/style";
import * as Yup from "yup";

// validation schema with Yup module
const validationSchema = Yup.object({
  name: Yup.string("Masukan nama anda")
    .matches(/^[A-Za-z\s]+$/, "Nama hanya boleh huruf")
    .required("Nama tidak boleh kosong"),
  email: Yup.string("Masukan Email Anda")
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  password: Yup.string("")
    .min(6, "Gunakan huruf besar, huruf kecil dan angka. Minimal 6 karakter.")
    .matches(
      /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d]{6,30}$/,
      "Gunakan huruf besar, huruf kecil dan angka. Minimal 6 karakter."
    )
    .required("Password tidak boleh kosong")
});

// Register form. will be rendered with
const RegisterForm = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false
  });

  const {
    values: { name, email, password },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        required
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        value={email}
        autoComplete="email"
        onChange={change.bind(null, "email")}
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        autoFocus
      />
      <TextField
        required
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="name"
        label="Nama"
        id="name"
        value={name}
        onChange={change.bind(null, "name")}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name ? errors.name : ""}
      />
      <TextField
        required
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={password}
        name="password"
        label="Kata sandi"
        type="password"
        id="password"
        onChange={change.bind(null, "password")}
        autoComplete="current-password"
        type={values.showPassword ? "text" : "password"}
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        type="submit"
        disabled={!isValid}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
