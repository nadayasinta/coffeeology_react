import React from "react";
import { Link } from "react-router-dom";
// import navbar image
import navbarProfile from "../assets/images/navbarProfile.png";
import navbarSearch from "../assets/images/navbarSearch.png";
import navbarBeans from "../assets/images/navbarBeans.png";
import navbarBrew from "../assets/images/navbarBrew.png";
import navbarActivity from "../assets/images/navbarActivity.png";

function navbar(props) {
  return (
    <div
      className="container-fluid navbar py-2 px-3 fixed-bottom"
      style={{ maxWidth: "480px" }}
    >
      <div className="row d-flex justify-content-around">
        <div className="col-2 text-center px-0">
          <Link to="/">
            <img src={navbarBrew} className="navbarIcon w-50 py-1" />
            <h6>Seduh</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/login">
            <img
              src={navbarBeans}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Biji</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/">
            <img
              src={navbarSearch}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Cari</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/activity">
            <img
              src={navbarActivity}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Aktivitas</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link
            onClick={e => {
              sessionStorage.removeItem("token");
            }}
          >
            <img
              src={navbarProfile}
              className="navbarIcon  w-50 py-1"
              alt="alt tag"
            />
            <h6>Profile</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   );
// }