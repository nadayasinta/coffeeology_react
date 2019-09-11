import createStore from 'unistore';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React from 'react';

const initialState = {
  // data recipe

  // data user
  name: '',

  // url
  baseURL: 'https://api.coffeology.shop'
};

const store = createStore(initialState);

const actionsRecipes = store => ({
  // setter data
  setListCategory(state, value) {
    return { listCategory: value };
  }
});

export { store, actionsRecipes };
