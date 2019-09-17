import store from "./store";
import axios from "axios";

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
      .catch(error => console.log("Error getUserMe", error));
  },
  async getMyBrew(state) {
    console.log("test get myBrew");
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes/user",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        console.log("data myBrew ", response.data.data)
        console.log("type data myBrew ", typeof(response.data.data))
        store.setState({ myBrew: response.data.data });
      })
      .catch(error => console.log("Error getMyBrew", error));
  },
});

export default actionsProfile;
