import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logos/logo-nav.png';
import './styles.css';

const Logo = () => {
	const history = useHistory();

	return (
		<div className="container gradient-text">
			<a href="https://parsec.iitdh.ac.in" style={{ textDecoration: 'none' }}>
				<img className="heading link" src={logo} />
			</a>
		</div>
	);
};

export default Logo;
