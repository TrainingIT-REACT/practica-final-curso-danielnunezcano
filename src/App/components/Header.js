import React from 'react';
import logo from '../images/logo.png';
import '../App.css';

const Header = () => (
	<div>
		<div className="topSidebar">
			<div className="logo">
				<img src={logo} alt="Reactify" height="50px" width="50px" />
			</div>
		</div>
	</div>
);

export default Header;
