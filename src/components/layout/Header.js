import React from 'react';
import headerImg from './../../asset/pizza-background.JPG'
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<div className={classes.headerText}>
					<div className={classes.headerTitle}>
						<h1>Zamów pizze Online</h1>
					</div>
					<div className={classes.cart}>
						<HeaderButton onShow={props.onShow}/>
					</div>
				</div>

				<div className={classes.shadowImg}></div>
				<img className={classes.headerImg} src={headerImg} alt='Pizza'></img>
			</header>
		</React.Fragment>
	);
};

export default Header;
