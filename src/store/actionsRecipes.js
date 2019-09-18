import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000
});

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
  setStepTypeNumberSelected(state, value) {
    return { stepTypeNumberSelected: value };
  },
  setRecipeSteps(state, value) {
    return { recipeSteps: value };
  },
  setSearchParams(state, value) {
    return { searchParams: value };
  },
  setSearchKeyword(state, value) {
    return { searchKeyword: value };
  },
  setOriginsParams(state, value) {
    return { originsParams: value };
  },
  setDifficultiesParams(state, value) {
    return { difficultiesParams: value };
  },
  setMethodsParams(state, value) {
    return { methodsParams: value };
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
        sessionStorage.removeItem("Recipe");
        sessionStorage.removeItem("RecipeDetail");
        sessionStorage.removeItem("note");
        sessionStorage.removeItem("stepTemporary");
      })
      .catch(error => {
        console.log(error.response);
        Toast.fire({
          type: "error",
          title: `${error.response.data.message}. Data Tidak Tersimpan`
        });
      });
  },
  async getRecipes(state, paramsInput) {
    console.log(paramsInput);
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes",
      params: paramsInput
    };

    await axios(config).then(response => {
      console.log(response);
      store.setState({ recipes: response.data.data });
    });
  },
  async searchRecipes(state, filterParams, searchParams) {
    console.log(filterParams);
    console.log(searchParams);
    const paramsInput = filterParams;
    paramsInput["search"] = searchParams;
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes",
      params: paramsInput
    };

    await axios(config).then(response => {
      console.log(response);
      store.setState({ recipesSearch: response.data.data });
    });
  },

  // async getRecipes(state, paramsInput = null) {
  //   let config = {
  //     method: "get",
  //     url: store.getState().baseURL + "/recipes"
  //   };
  //   console.log('param', paramsInput)

  //   if (paramsInput !== null) {
  //     console.log(paramsInput)
  //     let config = {
  //       method: "get",
  //       url: store.getState().baseURL + "/recipes",
  //       params: paramsInput
  //     };
  //   }

  //   await axios(config).then(response => {
  //     console.log(response);
  //     store.setState({ recipes: response.data.data });
  //   });
  // },
  async getRecipeByID(state, id) {
    let config = {
      method: "get",
      url: store.getState().baseURL + "/recipes/" + id
    };

    await axios(config)
      .then(response => {
        console.log("response.data.data", response.data.data);
        store.setState({ recipeDetails: response.data.data.recipeDetails });
        console.log(response.data.data.recipeDetails);
        store.setState({ recipeSteps: response.data.data.recipeSteps });
        store.setState({ recipe: response.data.data.recipe });
      })
      .catch(error => console.log("Error getRecipeById", error));
  }
});

export default actionsRecipes;
