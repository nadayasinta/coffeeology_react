import createStore from 'unistore';

// import json
import Swal from 'sweetalert2';
import stepTypes from './stepTypes';

// import style

const initialState = {
  // data recipe
  recipes: [
    // {
    //   name: "Ultimate v60",
    //   methodID: 1,
    //   originID: 1,
    //   beanName: "Beans Gayoo Bourbon",
    //   beanProcess: "Full Wash",
    //   beanRoasting: "Medium",
    //   rating: 4.7,
    //   brewCount: 120,
    //   favoriteCount: 20,
    //   time: 100,
    //   coffeeWeight: 17,
    //   water: 200,
    //   icon: require("../assets/images/StepIcon/stir.png")
    // },
    // {
    //   name: "Ultimate v60 2",
    //   methodID: 1,
    //   beanName: "Beans Gayoo Bourbon",
    //   beanProcess: "Full Wash",
    //   beanRoasting: "Medium",
    //   brewCount: 12,
    //   rating: 4.4,
    //   favoriteCount: 20,
    //   time: 100,
    //   coffeeWeight: 17,
    //   water: 200,
    //   icon: require("../assets/images/StepIcon/stir.png")
    // }
  ],

  recipesSelection: null,
  recipesSearch: null,

  recipe: null,
  // name: "Ultimate v60",
  // methodID: 1,
  // beanName: "Beans Gayoo Bourbon",
  // beanProcess: "Full Wash",
  // beanRoasting: "Medium",
  // rating: 45,
  // favoriteCount: 20,
  // time: 100,
  // coffeeWeight: 17,
  // water: 200,
  // icon: require("../assets/images/StepIcon/stir.png")
  recipeDetails: {
    //   fragrance: 0.4,
    //   aroma: 0.4,
    //   cleanliness: 0.4,
    //   sweetness: 0.3,
    //   taste: 0.3,
    //   acidity: 0.5,
    //   aftertaste: 0.5,
    //   balance: 0.5,
    //   globalTaste: 0.5,
    //   body: 0.5,
    //   note: "lorem isum",
    //   grindSize: "medium",
    //   waterTemp: 92
  },
  recipeSteps: [
    {
      recipeID: 1,
      stepNumber: 1,
      stepType: 1,
      note: 'wow',
      time: 100,
      amount: 20,
    },
    {
      recipeID: 1,
      stepNumber: 2,
      stepType: 4,
      note: 'wow',
      time: 150,
      amount: 0,
    },
    {
      recipeID: 1,
      stepNumber: 3,
      stepType: 6,
      note: 'wow',
      time: 50,
      amount: 80,
    },
  ],
  recipeCreator: [],
  difficulties: ['Mudah', 'Sedang', 'Sulit'],
  reviews: [],
  // search
  searchParams: {},
  searchKeyword: '',

  originsParams: {},
  difficultiesParams: {},
  methodsParams: {},

  // method
  methodID: 0,

  // data user
  name: '',
  emailValidStatus: false,
  login: 0,

  // url

  baseURL: 'http://0.0.0.0:5000',

  statusRegister: null,

  // baseURL: 'https://api.coffeology.shop',

  // data method
  methods: [
    {
      id: 1,
      name: 'French Press',
      icon: require('../assets/images/methodFrenchPress.png'),
      photo: require('../assets/images/photofrenchpress'),
    },
    {
      id: 2,
      name: 'Siphon',
      icon: require('../assets/images/methodSiphon.png'),
      photo: require('../assets/images/photosiphon.jpeg'),
    },
    {
      id: 3,
      name: 'Chemex',
      icon: require('../assets/images/methodChemex.png'),
      photo: require('../assets/images/photochemex.jpeg'),
    },
    {
      id: 4,
      name: 'Aero Press',
      icon: require('../assets/images/methodAeroPress.png'),
      photo: require('../assets/images/photoaeropress'),
    },
    {
      id: 5,
      name: 'V60',
      icon: require('../assets/images/methodV60.png'),
      photo: require('../assets/images/photov60.jpeg'),
    },
    {
      id: 6,
      name: 'Moka Pot',
      icon: require('../assets/images/methodMokaPot.png'),
      photo: require('../assets/images/photomokapot.jpeg'),
    },
  ],

  // step Types
  stepTypes,
  stepTypeNumber: [1, 2, 3, 4, 5, 6, 7, 8, 12],

  stepTypeNumberSelected: 1,
  // recipe demo data
  timerNow: 0,
  stepIndex: 0,
  beanRatio: 1,
  waterNow: 0,
  waterLimit: 0,
  stepTime: 0,
  stepWater: 0,

  // grind size data
  grinds: [
    { id: 1, name: 'sangat halus' },
    { id: 2, name: 'halus' },
    { id: 3, name: 'sedang' },
    { id: 4, name: 'kasar' },
    { id: 5, name: 'sangat kasar' },
  ],

  // flavor data
  flavors: [
    'fragrance',
    'aroma',
    'cleanliness',
    'sweetness',
    'taste',
    'acidity',
    'aftertaste',
    'balance',
    'globalTaste',
    'body',
  ],

  // origin data
  origins: [
    { id: 1, name: 'jawa' },
    { id: 2, name: 'sumatera' },
    { id: 3, name: 'flores' },
    { id: 4, name: 'toraja' },
    { id: 5, name: 'lainnya' },
  ],

  bean: null,

  // history data
  historyID: '',
  // recipe in page activity
  history: null,

  myBrew: null,

  // users Profile
  userMe: null,
  changePasswordStatus: false,
  editProfileStatus: false,

  Toast: Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
  }),

  // another user
  user: null,
  userBrew: null,

  // beans data
  beans: null,

  // import button image
  homeButton: require('../assets/images/home.png'),
  menuButton: require('../assets/images/menu.png'),
  backButton: require('../assets/images/back.png'),

  // show when post or put recipe
  showPostRecipe: false,
  showPutRecipe: false,
};

const store = createStore(initialState);

export default store;
