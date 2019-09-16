import React from "react";

// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import { makeStyles } from "@material-ui/core/styles";

// import material ui
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const useStylesSort = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const ContainedButtons = props => {
  const classes = useStyles();
  const classesSort = useStylesSort();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeSort = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  // create state
  const [methods, setMethods] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const [difficulties, setDifficulties] = React.useState({
    0: false,
    1: false,
    2: false
  });

  const [origins, setOrigins] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  // handle when user click methods filter
  const handleClickMethods = event => {
    event.preventDefault();
    if (event.target.id === "") {
      setMethods({
        ...methods,
        [event.target.parentNode.id]: !methods[event.target.parentNode.id]
      });
    } else {
      setMethods({
        ...methods,
        [event.target.id]: !methods[event.target.id]
      });
    }
  };

  // handle when user click Difficulties filter
  const handleClickDifficulties = event => {
    event.preventDefault();
    if (event.target.id === "") {
      setDifficulties({
        ...difficulties,
        [event.target.parentNode.id]: !difficulties[event.target.parentNode.id]
      });
    } else {
      setDifficulties({
        ...difficulties,
        [event.target.id]: !difficulties[event.target.id]
      });
    }
  };

  // handle when user click Origins filter
  const handleClickOrigins = event => {
    event.preventDefault();
    if (event.target.id === "") {
      setOrigins({
        ...origins,
        [event.target.parentNode.id]: !origins[event.target.parentNode.id]
      });
    } else {
      setOrigins({
        ...origins,
        [event.target.id]: !origins[event.target.id]
      });
    }
  };

  const handleClickFilter = event => {
    event.preventDefault();
    const searchParams = {};
    // insert selected method
    let methodsParams = "";
    Object.keys(methods).forEach(key => {
      console.log(key);
      if (methods[key]) {
        methodsParams += parseInt(key) + 1 + ",";
        console.log(methodsParams.slice(0, -1));
      }
    });
    if (methodsParams) {
      searchParams["methods"] = methodsParams.slice(0, -1);
    }

    // insert selected difficulty
    let difficultyParams = "";
    Object.keys(difficulties).forEach(key => {
      console.log(key);
      if (difficulties[key]) {
        difficultyParams += parseInt(key) + 1 + ",";
        console.log(difficultyParams.slice(0, -1));
      }
    });
    if (difficultyParams) {
      searchParams["difficulties"] = difficultyParams.slice(0, -1);
    }

    // insert selected origin
    let originParams = "";
    Object.keys(origins).forEach(key => {
      console.log(key);
      if (origins[key]) {
        originParams += parseInt(key) + 1 + ",";
        console.log(originParams.slice(0, -1));
      }
    });
    if (originParams) {
      searchParams["origins"] = originParams.slice(0, -1);
    }
    console.log(searchParams);
  };

  return (
    <div className="container filter">
      <div className="row">
        <div className="col-12 text-left">
          {/* {console.log(methods)} */}
          <h6>Pilih Metode Brewing</h6>
          <div className="scrolls mb-2">
            {props.methods.map((value, index) => {
              return (
                <Button
                  variant={methods[index] ? "contained" : "outlined"}
                  color="primary"
                  className={classes.button}
                  onClick={handleClickMethods}
                  key={"method" + index}
                  id={index}
                >
                  {value.name}
                </Button>
              );
            })}
          </div>
          <h6>Pilih Tingkat Kesulitan</h6>

          <div className="scrolls mb-2">
            {props.difficulties.map((value, index) => {
              return (
                <Button
                  variant={difficulties[index] ? "contained" : "outlined"}
                  color="primary"
                  className={classes.button}
                  onClick={handleClickDifficulties}
                  key={"difficulty" + index}
                  id={index}
                >
                  {value}
                </Button>
              );
            })}
          </div>

          <h6>Pilih Origin</h6>

          <div className="scrolls">
            {props.origins.map((value, index) => {
              return (
                <Button
                  variant={origins[index] ? "contained" : "outlined"}
                  color="primary"
                  className={classes.button}
                  onClick={handleClickOrigins}
                  key={"origin" + index}
                  id={index}
                >
                  {value.name}
                </Button>
              );
            })}
          </div>
          <br />
          <FormControl variant="outlined" className={classesSort.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
              Sort
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChangeSort("age")}
              labelWidth={labelWidth}
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple"
              }}
            >
              <option value="" />
              <option value={1}>Rating Paling Tinggi</option>
              <option value={2}>Terpopuler</option>
              <option value={3}>Tingkat Kesulitan (Mudah-Sulit)</option>
              <option value={4}>Tingkat Kesulitan (Sulit-Mudah)</option>
            </Select>
          </FormControl>
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickFilter}
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  "methods,difficulties,origins",
  actionsRecipes
)(ContainedButtons);
