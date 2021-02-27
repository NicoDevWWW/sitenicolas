import './App.css';
import './Responsive.css';
import { Container, Grid} from '@material-ui/core'
import FadeInAnimation from "./components/Animation/FadeIn";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import particlesParams from "./assets/particlesjs-config.json";
import Particles from "react-tsparticles";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from "./pages/Contact/Contact";
import Sidebar from "./components/Animation/Sidebar";
import Skills from "./pages/Skills/Skills";
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler";
const App = () => {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	if(!mountedComponent) return <div/>
  return (
	  <ThemeProvider theme={themeMode}>
		  <Toggle  theme={theme} toggleTheme={themeToggler} />
		  <GlobalStyles/>
		  <Router>

				<div className='main' id='main'>
				<Sidebar pageWrapId={"page-wrap"} outerContainerId={"main"} />
				<Particles
					id="tsparticles"
					params={particlesParams}
					style={{ position: 'absolute', zIndex: '-1', top: '0', left: '0' }}
				/>
				<Container className={'main_content'} id={"page-wrap"}>
					<Grid container spacing={7} className={'content_main'}>

						<Grid item xs={12} sm={12} md={4} lg={3} className={'content-app'} sticky={'top'}>
							<Profile />
						</Grid>

						<Grid item xs spacing={7} className={'content-app'} >
							<Header />
								<div className={'wrapper_content'}>
									<Switch>
										<Route path='/skills'>
											<Skills/>
										</Route>
										<Route path='/contact'>
											<Contact/>
										</Route>
										<Route path='/portfolio'>
											<Portfolio/>
										</Route>
										<Route path='/'>
											<Resume/>
										</Route>
									</Switch>
								</div>
							<Footer />
						</Grid>
					</Grid>
				</Container>

			</div>

		  </Router>
	  </ThemeProvider>
  );
}

export default App;
