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
			icon: require('../assets/images/StepIcon/stir.png'),
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
			icon: require('../assets/images/StepIcon/stir.png'),
		},
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
		globalTaste: 0.5,
	},
	recipeSteps: [
		{
			recipeID: 1,
			stepNumber: 1,
			stepType: 1,
			note: 'wow',
			time: 61,
			amount: 2,
		},
		{ recipeID: 1, stepNumber: 2, stepType: 4, note: 'wow', time: 31 },
		{ recipeID: 1, stepNumber: 3, stepType: 6, note: 'wow', time: 50 },
	],
	// method
	methodID: 0,
	method: {
		id: 1,
		name: 'v60',
		icon: require('../assets/images/methodV60.png'),
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
		{ name: 'Moka Pot', icon: method6 },
	],

	// step Types
	stepTypes: stepTypes,

	// data recipe steps
	timerNow: 0,
	steps: [{ name: 'aduk1', time: 100 }, { name: 'aduk2', time: 150 }, { name: 'aduk3', time: 50 }],
	stepIndex: 0,
	stepsHidden: [0, 0, 0],
};

const store = createStore(initialState);

const actionsRecipes = store => ({
	// setter data
	setListCategory(state, value) {
		return { listCategory: value };
	},
});

const actionsTimerTime = store => ({
	// setter data
	setTimerTime(state, value) {
		if (value === 0) {
			console.log('nambah');
			return { stepIndex: store.getState().stepIndex + 1 };
		} else {
			return { timerNow: value };
		}
	},
	setStepIndex(state, value) {
		console.log('sett');
		return { stepIndex: value };
	},
});

export { store, actionsRecipes, actionsTimerTime };
