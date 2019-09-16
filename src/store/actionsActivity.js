import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";
import { getThemeProps } from "@material-ui/styles";

const actionsActivity = store => ({
  async getHistory(state) {
    console.log("test get history");
    let config = {
      method: "get",
      url: store.getState().baseURL + "/history",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    };
    await axios(config)
      .then(response => {
        console.log("data history ", response.data.data)
        console.log("type data history ", typeof(response.data.data))
        store.setState({ history: response.data.data });
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
        console.log("data myBrew ", response.data.data)
        console.log("type data myBrew ", typeof(response.data.data))
        store.setState({ myBrew: response.data.data });
      })
      .catch(error => console.log("Error getMyBrew", error));
  },
});

export default actionsActivity;
