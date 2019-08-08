import React, { Component } from "react";
import './Header.css'
import menuLogo from './menu.png'

class Header extends Component {


	render() {
		return (
			<div className="header-wrapper">
				<img alt='menu' src={menuLogo} className="header-icon" /> 
			</div>
		)
	}
}

export default Header;