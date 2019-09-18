import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000
});

const ToastTop = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000
});

const actionsUsers = store => ({
  // user login
  login(state, data) {
    let config = {
      method: "post",
      url: store.getState().baseURL + "/token",
      data: data
    };
    axios(config)
      .then(response => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
        store.setState({ login: store.getState().login + 1 });
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: error.response.data.message
        });
      });
  },
  registerUser(state, data) {
    data["photo"] = "";
    let config = {
      method: "post",
      url: store.getState().baseURL + "/users",
      data: data
    };

    axios(config)
      .then(async response => {
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
            console.log(error);
          });
        // sessionStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        ToastTop.fire({
          type: "error",
          title: error.response.data.message
        });
      });
  },
  logout(state) {
    sessionStorage.removeItem("token");
  }
});

export default actionsUsers;
