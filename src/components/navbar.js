import React from 'react';
import { Link } from 'react-router-dom';
// import navbar image
import navbarProfile from '../assets/images/navbarProfile.png';
import navbarSearch from '../assets/images/navbarSearch.png';
import navbarBeans from '../assets/images/navbarBeans.png';
import navbarBrew from '../assets/images/navbarBrew.png';
import navbarActivity from '../assets/images/navbarActivity.png';

function Navbar(props) {
	return (
		<div className="container-fluid navbar shadow px-0 py-3 fixed-bottom">
			<div className="row justify-content-center">
				<div className="col-2 text-center px-0">
					<Link to="/">
						<img src={navbarBrew} className="navbarIcon w-50" />
						<h6>Seduh</h6>
					</Link>
				</div>
				<div className="col-2 text-center px-0">
					<Link to="/">
						<img src={navbarBeans} className="navbarIcon w-50" />
						<h6>Biji</h6>
					</Link>
				</div>
				<div className="col-2 text-center px-0">
					<Link to="/">
						<img src={navbarSearch} className="navbarIcon w-50" />
						<h6>Cari</h6>
					</Link>
				</div>
				<div className="col-2 text-center px-0">
					<Link to="/">
						<img src={navbarActivity} className="navbarIcon w-50" />
						<h6>Aktivitas</h6>
					</Link>
				</div>
				<div className="col-2 text-center px-0">
					<Link to="/">
						<img src={navbarProfile} className="navbarIcon  w-50" />
						<h6>Profile</h6>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
