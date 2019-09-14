import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const actionsReview = store => ({
    async postReview(state, data) {
        console.log("test");
        let config = {
            method: "post",
            url: store.getState().baseURL + "/reviews",
            data: data,
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        };
        await axios(config)
            .then(response => {
                store.setState({ recipe: response.data });
            })
            .catch(error => console.log("Error getRecipeById", error));
    },
});

export default actionsReview;
