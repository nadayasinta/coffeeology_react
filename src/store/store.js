import createStore from "unistore";
import axios from "axios";
import { Redirect } from "react-router-dom";
import React from "react";
// import method image
import method1 from "../assets/images/methodAeroPress.png";
import method2 from "../assets/images/methodChemex.png";
import method3 from "../assets/images/methodFrenchPress.png";
import method4 from "../assets/images/methodMokaPot.png";
import method5 from "../assets/images/methodSiphon.png";
import method6 from "../assets/images/methodV60.png";

// import json
import stepTypes from "./stepTypes";

const initialState = {
    // data recipe
    recipes: [
        {
            name: "Ultimate v60",
            methodID: 1,
            beanName: "Beans Gayoo Bourbon",
            beanProcess: "Full Wash",
            beanRoasting: "Medium",
            rating: 45,
            favoriteCount: 20,
            time: 100,
            coffeeWeight: 17,
            water: 200,
            icon: require("../assets/images/StepIcon/stir.png")
        },
        {
            name: "Ultimate v60 2",
            methodID: 1,
            beanName: "Beans Gayoo Bourbon",
            beanProcess: "Full Wash",
            beanRoasting: "Medium",
            rating: 4.5,
            favoriteCount: 20,
            time: 100,
            coffeeWeight: 17,
            water: 200,
            icon: require("../assets/images/StepIcon/stir.png")
        }
    ],
    recipe: {
        name: "Ultimate v60",
        methodID: 1,
        beanName: "Beans Gayoo Bourbon",
        beanProcess: "Full Wash",
        beanRoasting: "Medium",
        rating: 45,
        favoriteCount: 20,
        time: 100,
        coffeeWeight: 17,
        water: 200,
        icon: require("../assets/images/StepIcon/stir.png")
    },
    recipeDetails: {
        fragrance: 0.4,
        aroma: 0.4,
        cleanliness: 0.4,
        sweetness: 0.3,
        taste: 0.3,
        acidity: 0.5,
        aftertaste: 0.5,
        balance: 0.5,
        globalTaste: 0.5,
        body: 0.5,
        note: "lorem isum",
        grindSize: "medium",
        waterTemp: 92
    },
    recipeSteps: [
        {
            recipeID: 1,
            stepNumber: 1,
            stepType: 1,
            note: "wow",
            time: 100,
            amount: 20
        },
        {
            recipeID: 1,
            stepNumber: 2,
            stepType: 4,
            note: "wow",
            time: 150,
            amount: 0
        },
        {
            recipeID: 1,
            stepNumber: 3,
            stepType: 6,
            note: "wow",
            time: 50,
            amount: 80
        }
    ],
    // method
    methodID: 0,
    method: {
        id: 1,
        name: "v60",
        icon: require("../assets/images/methodV60.png")
    },

    // data user
    name: "",

    // url
    baseURL: "https://virtserver.swaggerhub.com/farizap/Coffeology1/1.0.0/",

    // data method
    methods: [
        { name: "French Press", icon: method1 },
        { name: "Siphon", icon: method2 },
        { name: "Chemex", icon: method3 },
        { name: "Aero Press", icon: method4 },
        { name: "V60", icon: method5 },
        { name: "Moka Pot", icon: method6 }
    ],

    // step Types
    stepTypes: stepTypes,

    stepTypeNumber : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

    stepTypeNumberSelected : 1,

    // save step

    // data recipe steps
    timerNow: 0,
    // steps: [
    //     { name: "aduk1", time: 100, amount: 200 },
    //     { name: "aduk2", time: 150, amount: 0 },
    //     { name: "aduk3", time: 50, amount: 10 }
    // ],
    stepIndex: 0,
    beanRatio: 1,
    waterNow: 0,
    waterLimit: 0,
    stepTime: 0,
    stepWater: 0
};

const store = createStore(initialState);

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
    async getRecipe(state, id) {
        console.log("test");
        await axios(store.getState().baseURL + "recipes/" + id).then(
            response => {
                console.log(response);
                store
                    .setState({ recipe: response.data })
                    .catch(error => console.log("Error getRecipeById", error));
            }
        );
    }
});

const actionsTimer = store => ({
    // setter data
    setTimer(state, value) {
        if (value === 0) {
            console.log("nambah");
            return { stepIndex: store.getState().stepIndex + 1 };
        } else {
            return { timerNow: value };
        }
    },
    setStepIndex(state, value) {
        console.log("sett");
        return { stepIndex: value };
    },
    setWaterNow(state, value) {
        return { waterNow: value };
    },
    setStepWater(state, value) {
        return { stepWater: value };
    },
    setStepTime(state, value) {
        return { stepTime: value };
    },
    setWaterLimit(state, value) {
        return { waterLimit: value };
    },
    setStepTypeNumberSelected: (state, value) => {
        return{ stepTypeNumberSelected: value };
    },
    convertSeconds(state, value) {
        let minutes = Math.floor(parseInt(value)/60)
        let seconds = parseInt(value) - minutes*60
        if (minutes < 10 ) {
            minutes =  `0${minutes}`
        } 
        if (seconds < 10 ) {
            seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`
    }
});

export { store, actionsRecipes, actionsTimer };
