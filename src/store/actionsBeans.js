import store from "./store";
import axios from "axios";

const actionsBeans = store => ({
    async getBeans(state) {
        let config = {
            method: "get",
            url: store.getState().baseURL + "/beans"
        };
        await axios(config)
            .then(response => {
                store.setState({ beans: response.data.data });
            })
            .catch(error => console.log("Error getBeans", error));
    },
    async getBeanById(state, data) {
        let config = {
            method: "get",
            url: store.getState().baseURL + `/beans/${data}`
        };
        await axios(config)
            .then(response => {
                store.setState({ bean: response.data.data });
            })
            .catch(error => console.log("Error getBeanById", error));
    }
});

export default actionsBeans;
