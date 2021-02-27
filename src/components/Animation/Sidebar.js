import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import "./Sidebar.css"
import {NavLink } from "react-router-dom";
import {Nav} from "react-bootstrap";
import {FaHome, FaAddressCard, FaCodeBranch, FaBook, FaPaperPlane} from "react-icons/all";

class Sidebar extends React.Component{

	constructor (props) {
		super(props)
		this.state = {
			menuOpen: false
		}
	}
	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu () {
		this.setState({menuOpen: false})
	}

	// This can be used to toggle the menu, e.g. when using a custom icon
	// Tip: You probably want to hide either/both default icons if using a custom icon
	// See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu () {
		this.setState(state => ({menuOpen: !state.menuOpen}))
	}

	render () {
		return (
			// Pass on our props
			<Menu
				isOpen={this.state.menuOpen}
				onStateChange={(state) => this.handleStateChange(state)}
				className={'menu_sidebar'}
			>
				<Nav.Link as={NavLink} to="/" className={'header_link_home menu-item'} onClick={() => this.closeMenu()}>
					<FaHome className={'menu_icon'}/>
					<span>Home</span>
				</Nav.Link>

				<Nav.Link
					onClick={() => this.closeMenu()}
					as={NavLink}
					to="/"
					className={' menu-item'}>
					<FaAddressCard className={'menu_icon'}/>
					<span>Resume</span>
				</Nav.Link>
				<Nav.Link
					onClick={() => this.closeMenu()}
					as={NavLink}
					to="/skills"
					className={' menu-item'}>
					<FaCodeBranch className={'menu_icon'}/>
					<span>Skills</span>
				</Nav.Link>
				<Nav.Link
					onClick={() => this.closeMenu()}
					as={NavLink}
					to="/portfolio"
					className={' menu-item'}>
					<FaBook className={'menu_icon'}/>
					<span>Portfolio</span>
				</Nav.Link>
				<Nav.Link
					onClick={() => this.closeMenu()}
					as={NavLink}
					to="/contact"
					className={' menu-item'}>
					<FaPaperPlane className={'menu_icon'}/>
					<span>Contact</span>
				</Nav.Link>
			</Menu>
		);
	}
};
export default Sidebar;
