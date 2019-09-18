import React from "react";
import { Link } from "react-router-dom";
//
import Filter from "../components/filter";
import RecipeCard from "../components/recipeCard";

// import store
import actionsRecipes from "../store/actionsRecipes";
import { connect } from "unistore/react";

// import material-ui
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import Pagination from "react-bootstrap/Pagination";

const _ = require("lodash");

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto",
    maxWidth: "480px"
  }
});

const useStylesSearch = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Search = props => {
  const classes = useStyles();
  const classesSearch = useStylesSearch();

  const [state, setState] = React.useState({
    bottom: false,
    pagination: 1
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, bottom: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <Filter onClick={toggleDrawer("bottom", false)} />
    </div>
  );

  const onSubmitSearch = event => {
    event.preventDefault();
    props.searchRecipes(
      props.searchParams,
      props.searchKeyword,
      state.pagination
    );
  };
  const onChangeSearch = event => {
    event.preventDefault();
    props.setSearchKeyword(event.target.value);
  };

  React.useEffect(() => {
    props.searchRecipes(
      props.searchParams,
      props.searchKeyword,
      state.pagination
    );
  }, [props.searchParams, state.pagination]);

  const convertSeconds = secondsInput => {
    let minutes = Math.floor(parseInt(secondsInput) / 60);
    let seconds = parseInt(secondsInput) - minutes * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const handlePreviousPageButton = event => {
    event.preventDefault();
    setState({ pagination: state.pagination - 1 });
  };
  const handleNextPageButton = event => {
    event.preventDefault();
    setState({ ...state, pagination: state.pagination + 1 });
  };

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <Paper className={classesSearch.root}>
          <IconButton className={classesSearch.iconButton} aria-label="menu">
            <MenuIcon onClick={toggleDrawer("bottom", true)} />
          </IconButton>
          <Divider className={classesSearch.divider} orientation="vertical" />
          <InputBase
            className={classesSearch.input}
            placeholder="Cari Guides"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={onChangeSearch}
          />
          <IconButton
            className={classesSearch.iconButton}
            aria-label="search"
            type="submit"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
      {_.isEmpty(props.recipesSearch)
        ? 0
        : props.recipesSearch.recipes.map(value => {
            return (
              <div className="col-12">
                <Link to={"/recipe/" + value.id}>
                  <RecipeCard
                    data={value}
                    methodIcon={props.methods[value.methodID - 1].icon}
                    time={convertSeconds(value.time)}
                  />
                </Link>
              </div>
            );
          })}
      <br />

      <Pagination size="lg">
        {props.recipesSearch.pageNow === 1 ? (
          <span></span>
        ) : (
          <Pagination.First onClick={handlePreviousPageButton} />
        )}
        {props.recipesSearch.pageNow === props.recipesSearch.pageTotal ? (
          <span></span>
        ) : (
          <Pagination.Last onClick={handleNextPageButton} />
        )}
      </Pagination>
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {fullList("bottom")}
      </SwipeableDrawer>
    </div>
  );
};

export default connect(
  "searchParams,searchKeyword,recipesSearch,methods",
  actionsRecipes
)(Search);
