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

const initialState = {
    // data recipe

    // data user
    name: "",

    // url
    baseURL: "https://api.coffeology.shop",

    // data method
    methods: [
        { name: "French Press", icon: method1 },
        { name: "Siphon", icon: method2 },
        { name: "Chemex", icon: method3 },
        { name: "Aero Press", icon: method4 },
        { name: "V60", icon: method5 },
        { name: "Moka Pot", icon: method6 }
    ]
};

const store = createStore(initialState);

const actionsRecipes = store => ({
    // setter data
    setListCategory(state, value) {
        return { listCategory: value };
    }
});

export { store, actionsRecipes };
