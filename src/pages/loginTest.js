import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

// import store
import actionsUsers from "../store/actionUsers";
import { connect } from "unistore/react";
import useStyles from "../store/style";

// import component
import Header from "../components/header";

const SignIn = props => {
  const classes = useStyles();

  const data = {
    email: "",
    password: ""
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (props.validateEmail(data.email)) {
      alert("email tidak valid");
    } else {
      props.login(data);
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
      <Header />
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
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
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
