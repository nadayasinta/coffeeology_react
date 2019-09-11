import createStore from 'unistore';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React from 'react';
// import method image
import method1 from '../assets/images/methodAeroPress.png';
import method2 from '../assets/images/methodChemex.png';
import method3 from '../assets/images/methodFrenchPress.png';
import method4 from '../assets/images/methodMokaPot.png';
import method5 from '../assets/images/methodSiphon.png';
import method6 from '../assets/images/methodV60.png';

// import json
import stepTypes from './stepTypes';

const initialState = {
  // data recipe
  recipes: [
    {
      name: 'Ultimate v60',
      methodID: 1,
      beanName: 'Beans Gayoo Bourbon',
      beanProcess: 'Full Wash',
      beanRoasting: 'Medium',
      rating: 45,
      favoriteCount: 20,
      time: 100,
      coffeeWeight: 17,
      water: 200,
      icon: require('../assets/images/StepIcon/stir.png')
    },
    {
      name: 'Ultimate v60 2',
      methodID: 1,
      beanName: 'Beans Gayoo Bourbon',
      beanProcess: 'Full Wash',
      beanRoasting: 'Medium',
      rating: 4.5,
      favoriteCount: 20,
      time: 100,
      coffeeWeight: 17,
      water: 200,
      icon: require('../assets/images/StepIcon/stir.png')
    }
  ],
  recipeDetails: {
    fragrance: 0.4,
    aroma: 0.4,
    cleanliness: 0.4,
    sweetness: 0.3,
    taste: 0.3,
    acidity: 0.5,
    aftertaste: 0.5,
    balance: 0.5,
    globalTaste: 0.5
  },
  // method
  methodID: 0,
  method: {
    id: 1,
    name: 'v60',
    icon: require('../assets/images/methodV60.png')
  },

  // data user
  name: '',

  // url
  baseURL: 'https://api.coffeology.shop',

  // data method
  methods: [
    { name: 'French Press', icon: method1 },
    { name: 'Siphon', icon: method2 },
    { name: 'Chemex', icon: method3 },
    { name: 'Aero Press', icon: method4 },
    { name: 'V60', icon: method5 },
    { name: 'Moka Pot', icon: method6 }
  ],

  // step Types
  stepTypes: stepTypes
};

const store = createStore(initialState);

const actionsRecipes = store => ({
  // setter data
  setListCategory(state, value) {
    return { listCategory: value };
  }
});

export { store, actionsRecipes };
