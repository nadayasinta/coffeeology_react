import React from "react";

import Filter from "../components/filter";

// import material-ui
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { maxWidth } from "@material-ui/system";

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
    bottom: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <Filter />
    </div>
  );

  const onClickSearch = event => {
    event.preventDefault();
    console.log(event);
    toggleDrawer("right", true);
    console.log("lol");
  };

  return (
    <div>
      <Paper className={classesSearch.root}>
        <IconButton className={classesSearch.iconButton} aria-label="menu">
          <MenuIcon onClick={toggleDrawer("bottom", true)} />
        </IconButton>
        <Divider className={classesSearch.divider} orientation="vertical" />
        <InputBase
          className={classesSearch.input}
          placeholder="Cari Guides"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton className={classesSearch.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

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

export default Search;
