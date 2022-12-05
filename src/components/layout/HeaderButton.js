import classes from './HeaderButton.module.css';
const HeaderButton = (props) => {
	return (
		<button className={classes.button} onClick={props.onShow}>
			<i className='fa-solid fa-cart-shopping'></i> Twój koszyk:<span> 0</span>
		</button>
	);
};
export default HeaderButton;
