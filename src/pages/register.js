import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import store
import actionsUsers from "../store/actionUsers";
import { connect } from "unistore/react";
import useStyles from "../store/style";

// import alert
import Swal from "sweetalert2";

const Register = props => {
  const classes = useStyles();

  // store data from email and password
  const data = {
    email: "",
    password: "",
    passwordRepeat: "",
    name: ""
  };

  // create alert
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000
  });

  // validate email from form
  const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };

  // handle submit form, if data is valid, post to create new user
  const handleOnSubmit = event => {
    event.preventDefault();

    if (data.email === "") {
      return Toast.fire({
        type: "error",
        title: "Email tidak boleh kosong!"
      });
    }
    if (!validateEmail(data.email)) {
      return Toast.fire({
        type: "error",
        title: "Email tidak valid!"
      });
    }
    if (data.password === "") {
      return Toast.fire({
        type: "error",
        title: "Password tidak boleh kosong!"
      });
    }
    if (data.passwordRepeat === "") {
      return Toast.fire({
        type: "error",
        title: "Ulangi password anda!"
      });
    }
    if (!validatePasswordRepeat(data.password, data.passwordRepeat)) {
      return Toast.fire({
        type: "error",
        title: "Password tidak sama!"
      });
    }
    if (data.name === "") {
      return Toast.fire({
        type: "error",
        title: "Nama Harus Diisi!"
      });
    }

    // POST data to register endpoint
    props.registerUser(data);
    setTimeout(() => {
      props.login(data);

      Toast.fire({
        type: "success",
        title: "Registrasi berhasil!"
      });
      setTimeout(() => {
        props.history.replace("/");
      }, 1000);
    }, 500);
  };

  const validatePasswordRepeat = () => {
    return data.password === data.passwordRepeat;
  };

  const onChangeEmail = event => {
    data.email = event.target.value;
  };
  const onChangePassword = event => {
    data.password = event.target.value;
  };
  const onChangePasswordRepeat = event => {
    data.passwordRepeat = event.target.value;
  };
  const onChangeName = event => {
    data.name = event.target.value;
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChangeEmail}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="name"
              id="name"
              onChange={onChangeName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Password"
              type="password"
              id="password1"
              onChange={onChangePassword}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Repeat Password"
              type="password"
              id="password2"
              onChange={onChangePasswordRepeat}
              autoComplete="current-password"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onChange={onChangePasswordRepeat}
              onClick={handleOnSubmit}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default connect(
  "",
  actionsUsers
)(Register);
