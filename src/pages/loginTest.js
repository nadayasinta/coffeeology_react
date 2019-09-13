import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Link, Redirect } from "react-router-dom";

// import store
import { connect } from "unistore/react";
import actionsUsers from "../store/actionUsers";
import useStyles from "../store/style";

// import alert
import Swal from "sweetalert2";

const SignIn = props => {
  const classes = useStyles();

  const data = {
    email: "",
    password: ""
  };
  const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 2000
    });

    if (!validateEmail(data.email)) {
      Toast.fire({
        type: "error",
        title: "Email tidak valid!"
      });
    } else {
      console.log(sessionStorage.getItem("token"));
      props.login(data);

      if (sessionStorage.getItem("token")) {
        Toast.fire({
          type: "success",
          title: "You have been signed in!"
        });
        setTimeout(() => {
          props.history.replace("/");
        }, 1000);
      }
    }
  };

  const onChangeEmail = event => {
    data.email = event.target.value;
  };
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
