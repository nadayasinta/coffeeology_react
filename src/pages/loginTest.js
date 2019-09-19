import React from "react";
import { Link, Redirect } from "react-router-dom";

// import material-ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { HumanHandsup } from "mdi-material-ui";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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

    const [values, setValues] = React.useState({
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
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
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
            await props.login(data);

            // check login success, if true redirect to home
            setTimeout(() => {
                if (sessionStorage.getItem("token")) {
                    Toast.fire({
                        type: "success",
                        title: "Sukses Login!"
                    });
                    setTimeout(() => {
                        props.history.goBack();
                    }, 200);
                }
            }, 500);
        }
    };

    const handleRedirect = event => {
        event.preventDefault();
        props.history.goBack();
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
            {console.log(props.history.action)}
            {sessionStorage.getItem("token") ? (
                <Redirect to="/" />
            ) : (
                <div></div>
            )}
            <img
                className="backbutton "
                src={props.backButton}
                onClick={event => props.history.goBack()}
            />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <HumanHandsup />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        SIGN IN
                    </Typography>
                    <form
                        className={classes.form}
                        method="POST"
                        onSubmit={handleOnSubmit}
                    >
                        <TextField
                            required
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
                        />{" "}
                        <TextField
                            required
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            id="password"
                            type={values.showPassword ? "text" : "password"}
                            onChange={onChangePassword}
                            autoComplete="current-password"
                            helperText="Gunakan huruf besar, huruf kecil dan angka. Minimal 6 karakter. "
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {values.showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
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
                        >
                            Sign In
                        </Button>
                        <Grid container className="justify-content-center">
                            <Grid item>
                                ------------ ATAU ------------
                                <br />
                                {/* <Link to="/register">Don't have an account? Sign Up</Link> */}
                            </Grid>
                        </Grid>
                    </form>
                    <Link to="/register">
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default connect(
    "backButton",
    actionsUsers
)(SignIn);
