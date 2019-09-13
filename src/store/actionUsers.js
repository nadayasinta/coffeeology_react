import { store } from "./store";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
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
      })
      .catch(error => {
        Toast.fire({
          type: "error",
          title: error.response.data.message
        });
      });
  },
  validateEmail(state, email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  },
  registerUser(state, data) {
    data["photo"] = "";
    let config = {
      method: "post",
      url: store.getState().baseURL + "/users",
      data: data
    };
    axios(config)
      .then(response => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  },
  logout(state) {
    sessionStorage.removeItem("token");
  }
});

export default actionsUsers;
