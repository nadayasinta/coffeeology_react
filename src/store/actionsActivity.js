import store from "./store";
import axios from "axios";
// import Swal from "sweetalert2";
// import { getThemeProps } from "@material-ui/styles";

const actionsActivity = store => ({
  setMyBrew(state, value) {
    return { MyBrew: value };
  },
  setHistory(state, value) {
    return { history: value };
  },
  async getHistory(state, paramsInput) {
    console.log("test get history");
    let config = {
      method: "get",
      url: store.getState().baseURL + "/history",
      params: paramsInput,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        console.log("data history ", response.data.data);
        console.log("type data history ", typeof response.data.data);
        store.setState({ history: response.data });
      })
      .catch(error => console.log("Error getHistory", error));
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
        console.log("data myBrew ", response.data.data);
        console.log("type data myBrew ", typeof response.data.data);
        store.setState({ myBrew: response.data });
      })
      .catch(error => console.log("Error getMyBrew", error));
  }
});

export default actionsActivity;
