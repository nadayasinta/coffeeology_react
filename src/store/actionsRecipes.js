import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const actionsRecipes = store => ({
  // setter data
  setListCategory(state, value) {
    return { listCategory: value };
  },

  setBeanRatio(state, value) {
    return { beanRatio: value };
  },

  setWater(state, value) {
    return { water: value };
  },
  setRecipes(state, value) {
    return { recipes: value };
  },
  setStepTypeNumberSelected: (state, value) => {
    return { stepTypeNumberSelected: value };
  },
  // axios

  async postRecipe(state, data) {
    console.log("test");
    let config = {
      method: "post",
      url: store.getState().baseURL + "/recipes",
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
  async getRecipes(state, params = null) {
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes"
    };
    if (!params) {
      config["params"] = params;
    }

    await axios(config).then(response => {
      console.log(response);
      store.setState({ recipes: response.data.data });
    });
  },
  async getRecipeByID(state, id) {
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes/" + id
    };

    await axios(config)
      .then(response => {
        console.log('response.data.data', response.data.data)
        store.setState({ recipeDetails: response.data.data.recipeDetails });

        store.setState({ recipeSteps: response.data.data.recipeSteps });
        store.setState({ recipe: response.data.data.recipe });
      })
      .catch(error => console.log("Error getRecipeById", error));
  }
});

export default actionsRecipes;
