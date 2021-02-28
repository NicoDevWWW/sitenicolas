import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,} from "react-bootstrap";
import {NavLink, withRouter } from "react-router-dom";
import {FaHome} from "react-icons/all";
import resumeData from "../../utils/resumeData";
import '../Header/Header.css'
class Header extends React.Component {
	render () {
		return(
				<Navbar id={"header"} expand="lg"  className={'header container_shadow navbar-expand-lg'} collapseOnSelect>
					<Nav.Link as={NavLink} to="/" className={'header_link_home'}>
						<Navbar.Brand className={'header_home'}>
							<FaHome/>
						</Navbar.Brand>
					</Nav.Link>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav >
							<Nav.Link
								as={NavLink}
								to="/"
								className={'header_link'} eventKey="1" >
								Résumé
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/skills"
								className={'header_link'} eventKey="2" >
								Compétences
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/portfolio"
								className={'header_link'} eventKey="3">
								Portfolio
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/contact"
								className={'header_link'} eventKey="4">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<div className={'header_right'}>
						{Object.keys(resumeData.socials).map(key => (
							<a className={"nav-item-social"} href={resumeData.socials[key].link} target="_blank">
								{resumeData.socials[key].icon}
							</a>
						))}
					</div>
				</Navbar>
		)
	}

}

export default withRouter(Header) ;
