import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000
});

const actionsProfile = store => ({
  async getProfile(state) {
    console.log("test get profile");
    let config = {
      method: "get",
      url: store.getState().baseURL + "/users/me",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        console.log("data users ", response.data.data)
        store.setState({ userMe: response.data.data });
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: `${error.response.data.message}`
        });
      });
  },
  async editProfile(state, data) {
    console.log("test get myBrew");
    let config = {
      method: "put",
      url: store.getState().baseURL + "/users",
      data : data,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        console.log("data users ", response.data.data)
        store.setState({ userMe: response.data.data });
        store.setState({ editProfileStatus: true });
        Toast.fire({
          type: "success",
          title: "Profil Berhasil Diperbarui"
        });
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: `${error.response.data.message}`
        });
      });
  },
  async editPassword(state, data) {
    console.log("test get myBrew");
    let config = {
      method: "put",
      url: store.getState().baseURL + "/users",
      data : data,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        store.setState({ changePasswordStatus: true });
        Toast.fire({
          type: "success",
          title: "Password Telah Diperbarui"
        });
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: `${error.response.data.message}`
        });
      });
  },
  async login(state, data) {
    let config = {
      method: "post",
      url: store.getState().baseURL + "/token",
      data: data
    };
    await axios(config)
      .then(response => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: error.response.data.message
        });
      });
  },
  setProfileView(state, value) {
    return { profileView: value };
  },
  resetChangePasswordStatus(state) {
    return { changePasswordStatus: false };
  },
  resetEditProfileStatus(state) {
    return { editProfileStatus: false };
  },
});

export default actionsProfile;
