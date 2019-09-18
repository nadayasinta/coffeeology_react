import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

// import material ui
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ButtonUI from "@material-ui/core/Button";

// import image
import profileIcon from "../assets/images/profile.png";
import editProfile from "../assets/images/edit-profile.png";

// import store
import { connect } from "unistore/react";
import actionsProfile from "../store/actionsProfile";
import useStyles from "../store/style";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfileView: false,
      editPasswordView: false,
      showPasswordOld: false,
      showPasswordNew: false,
      passwordOld: "",
      passwordNew: ""
    };
    this.name = React.createRef();
    this.bio = React.createRef();
    this.passwordOld = React.createRef();
    this.passwordNew = React.createRef();
    this.retypePasswordNew = React.createRef();
  }

  componentDidMount = () => {
    if (sessionStorage.getItem("token") === null) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      this.props.getProfile();
    }
  };

  // handle show hide modal
  handleChangeView = async (e, state, value) => {
    e.preventDefault();
    await this.setState({ state: value });
  };

  // handle edit name and bio
  handleSubmitProfile = async e => {
    e.preventDefault();
    let data = {
      name: this.name.current.value,
      bio: this.bio.current.value
    };
    await this.props.editProfile(data);
    // if data is not valid
    if (this.props.editProfileStatus) {
      await this.props.getProfile();
      await this.setState({ editProfileView: false });
      await this.props.resetEditProfileStatus();
    } else {
      return console.log("ulang");
    }
  };

  // handle edit password user
  handleSubmitPassword = async e => {
    e.preventDefault();

    let data = {
      passwordOld: this.state.passwordOld,
      passwordNew: this.state.passwordNew
    };

    console.log("data password tes");
    console.log("data password", data);
    await this.props.editPassword(data);

    // if data is not valid
    if (this.props.changePasswordStatus) {
      await this.props.resetChangePasswordStatus();
      data = {
        email: this.props.userMe.email,
        password: this.state.passwordNew
      };
      await this.props.login(data);
      await this.props.getProfile();
      await this.setState({
        editPasswordView: false,
        showPasswordOld: false,
        showPasswordNew: false
      });
    } else {
      return console.log("salah");
    }
  };

  // handle logout
  handleLogot = async e => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    this.props.setLogin();
    this.props.history.push("/");
  };

  render() {
    if (sessionStorage.getItem("token") === null) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div className="container border">
          <div className="row login_box">
            <div className="col-md-12 col-xs-12 mb-2" align="center">
              <div className="mt-2">
                <img
                  src={profileIcon}
                  style={{ borderRadius: "50%", backgroundColor: "#000000" }}
                  width="100px"
                />
              </div>
              <h3>
                {this.props.userMe.name}
                <span
                  className="btn btn-orange"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ editProfileView: true });
                  }}
                >
                  <img src={editProfile} alt="altTag" width="20px"></img>
                </span>
              </h3>
              <hr></hr>
              <span className="text-justify">{this.props.userMe.bio}</span>
            </div>
            <div
              className="col-md-6 col-xs-6 border btn btn-orange"
              align="center"
              onClick={e => this.props.history.push("/activity")}
            >
              <h5>
                {this.props.userMe.brewCount} <br /> <span>Brew</span>
              </h5>
            </div>
            <div
              className="col-md-6 col-xs-6 border btn btn-orange"
              align="center"
              onClick={e => this.props.history.push("/activity")}
            >
              <h5>
                {this.props.userMe.recipeCount} <br /> <span>Resep</span>
              </h5>
            </div>

            <div className="col-12 col-md-12 col-xs-12 mt-2">
              <div align="left">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ editPasswordView: true });
                  }}
                >
                  Ubah Password
                </button>
                <hr></hr>
              </div>
              <div align="left">
                <button
                  onClick={e => this.handleLogot(e)}
                  type="button"
                  className="btn btn-primary mb-3"
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>

          <Modal show={this.state.editProfileView}>
            <Modal.Header>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmitProfile}>
                <Form.Group role="form" controlId="formBasicEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.userMe.name}
                    ref={this.name}
                    required
                  />
                </Form.Group>
                <Form.Group
                  role="form"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={this.props.userMe.bio}
                    ref={this.bio}
                    rows="3"
                    maxLength="250"
                    required
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ editProfileView: false });
                    }}
                  >
                    Batal
                  </Button>
                  <Button value="Submit" type="submit" variant="primary">
                    Simpan
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>

          <Modal show={false}>
            <Modal.Header>
              <Modal.Title>Edit Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmitPassword}>
                <Form.Group role="form" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your Current Password"
                    ref={this.passwordOld}
                    required
                  />
                </Form.Group>
                <Form.Group role="form" controlId="formBasicEmail">
                  <Form.Label>Password Baru</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your New Password"
                    ref={this.passwordNew}
                    required
                  />
                </Form.Group>
                <Form.Group role="form" controlId="formBasicEmail">
                  <Form.Label>Ulangi Password Baru</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Retype Your New Password"
                    ref={this.retypePasswordNew}
                    required
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ editPasswordView: false });
                    }}
                  >
                    Batal
                  </Button>
                  <Button value="Submit" type="submit" variant="primary">
                    Simpan
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>

          {/* COba */}

          <Modal show={this.state.editPasswordView}>
            <Modal.Header>
              <Modal.Title>Current Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmitPassword}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="passwordold"
                  label="Current Password"
                  id="passwordold"
                  type={this.state.showPasswordOld ? "text" : "password"}
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ passwordOld: e.target.value });
                  }}
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={e => {
                            e.preventDefault();
                            this.setState({
                              showPasswordOld: !this.state.showPasswordOld
                            });
                          }}
                          onMouseDown={e => e.preventDefault()}
                        >
                          {this.state.showPasswordOld ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />{" "}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="passwordnew"
                  label="New Password"
                  id="passwordnew"
                  type={this.state.showPasswordNew ? "text" : "password"}
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ passwordNew: e.target.value });
                  }}
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={e => {
                            e.preventDefault();
                            this.setState({
                              showPasswordNew: !this.state.showPasswordNew
                            });
                          }}
                          onMouseDown={e => e.preventDefault()}
                        >
                          {this.state.showPasswordNew ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ editPasswordView: false });
                    }}
                  >
                    Batal
                  </Button>
                  <Button value="Submit" type="submit" variant="primary">
                    Simpan
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}

export default connect(
  "userMe, changePasswordStatus, Toast, editProfileStatus",
  actionsProfile,
  useStyles
)(Profile);
