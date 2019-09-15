import React from "react";
import { Link, Redirect } from "react-router-dom";

// import material-ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import store
import { connect } from "unistore/react";
import actionsUsers from "../store/actionUsers";
import useStyles from "../store/style";

// import alert
import Swal from "sweetalert2";

const SignIn = props => {
  const classes = useStyles();

  // store data from email and password
  const data = {
    email: "",
    password: ""
  };

  // create alert
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000
  });

  // validate email from form
  const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  };

  // handle submit form, if data is valid, post to get token
  const handleOnSubmit = async event => {
    event.preventDefault();

    if (!validateEmail(data.email)) {
      Toast.fire({
        type: "error",
        title: "Email tidak valid!"
      });
    } else {
      console.log(sessionStorage.getItem("token"));
      props.login(data);

      // check login success, if true redirect to home
      setTimeout(() => {
        if (sessionStorage.getItem("token")) {
          Toast.fire({
            type: "success",
            title: "Sukses Login!"
          });
          setTimeout(() => {
            props.history.replace("/");
          }, 1000);
        }
      }, 500);
    }
  };

  // handle on change email form
  const onChangeEmail = event => {
    data.email = event.target.value;
  };

  // handle on change password form
  const onChangePassword = event => {
    data.password = event.target.value;
  };

  return (
    <div>
      {sessionStorage.getItem("token") ? <Redirect to="/" /> : <div></div>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChangePassword}
              autoComplete="current-password"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOnSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default connect(
  "",
  actionsUsers
)(SignIn);
