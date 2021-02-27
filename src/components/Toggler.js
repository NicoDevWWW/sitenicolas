import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
	const [ darkMode, setDarkMode ] = React.useState(false)
	React.useEffect(() => {

		const localTheme = window.localStorage.getItem('theme');
		const body = document.body
		const toggle = document.querySelector('.toggle-inner')
		if( localTheme === 'dark' ) {
			body.classList.add('dark-mode')
			toggle.classList.add('toggle-active')
		} else {
			body.classList.remove('dark-mode')
			toggle.classList.remove('toggle-active')
		}
	}, [darkMode])
    return (
    	<div  id="toggle" onClick={() => darkMode === false  ? setDarkMode(true) : setDarkMode(false)}>
			<div className={'toggle-inner'}

				 onClick={toggleTheme}>
			</div>
		</div>

    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;


