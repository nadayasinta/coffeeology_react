import { store } from "./store";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

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
      })
      .catch(error => {
        console.log(error);
      });
  },
  validateEmail(state, email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      })
      .catch(error => {
        console.log(error);
      });
  }
});

export default actionsUsers;
